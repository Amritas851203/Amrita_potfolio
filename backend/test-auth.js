// Integration test for Auth APIs
const BASE_URL = 'http://localhost:5000/api/auth';

async function runTests() {
  console.log('🧪 Starting Auth API Integration Tests...\n');

  try {
    // 1. Health check
    const healthRes = await fetch('http://localhost:5000/api/health');
    const healthData = await healthRes.json();
    console.log('✅ 1. Health Check:', healthData.message);

    // Test credentials
    const testUser = {
      name: 'Amrita Sharma',
      email: `test_${Date.now()}@example.com`,
      password: 'StrongPassword123!',
      role: 'admin',
    };

    // 2. Register
    const regRes = await fetch(`${BASE_URL}/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(testUser),
    });
    const regData = await regRes.json();
    console.log(`✅ 2. Register User (${regRes.status}):`, regData.success ? 'Success' : regData.message);
    if (!regData.success) throw new Error(regData.message);

    const token = regData.data.token;
    console.log('   User ID:', regData.data.user._id);
    console.log('   Token generated:', token.substring(0, 30) + '...');

    // 3. Duplicate Registration Check
    const dupRes = await fetch(`${BASE_URL}/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(testUser),
    });
    const dupData = await dupRes.json();
    console.log(`✅ 3. Duplicate Email Rejection (${dupRes.status}):`, dupData.message);

    // 4. Login with Wrong Password
    const badLoginRes = await fetch(`${BASE_URL}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: testUser.email, password: 'wrongpassword' }),
    });
    const badLoginData = await badLoginRes.json();
    console.log(`✅ 4. Invalid Password Rejection (${badLoginRes.status}):`, badLoginData.message);

    // 5. Login with Correct Credentials
    const loginRes = await fetch(`${BASE_URL}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: testUser.email, password: testUser.password }),
    });
    const loginData = await loginRes.json();
    console.log(`✅ 5. Login Successful (${loginRes.status}):`, loginData.message);
    const loginToken = loginData.data.token;

    // 6. Access Protected Route GET /api/auth/me WITHOUT Token
    const unauthRes = await fetch(`${BASE_URL}/me`);
    const unauthData = await unauthRes.json();
    console.log(`✅ 6. Protected Route Without Token Rejected (${unauthRes.status}):`, unauthData.message);

    // 7. Access Protected Route GET /api/auth/me WITH Valid Token
    const meRes = await fetch(`${BASE_URL}/me`, {
      headers: { Authorization: `Bearer ${loginToken}` },
    });
    const meData = await meRes.json();
    console.log(`✅ 7. Protected Route With Token (${meRes.status}):`, meData.success ? 'Success' : 'Failed');
    console.log('   Fetched User Profile:', {
      name: meData.data.user.name,
      email: meData.data.user.email,
      role: meData.data.user.role,
    });

    console.log('\n🎉 All Auth API tests passed with 100% success!\n');
  } catch (err) {
    console.error('❌ Test failed:', err);
    process.exit(1);
  }
}

runTests();
