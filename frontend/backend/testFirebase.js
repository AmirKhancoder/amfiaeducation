const { db, auth } = require('./config/firebase'); // Import Firebase instances

async function testFirebase() {
  try {
    // 1. Test Firebase Auth (Create a user)
    const user = await auth.createUser({
      email: 'testuser@example.com',
      password: 'test1234',
      displayName: 'Test User'
    });
    console.log('✅ Firebase Auth Success! User ID:', user.uid);

    // 2. Test Firestore (Write data)
    await db.collection('testUsers').doc(user.uid).set({
      email: user.email,
      createdAt: new Date(),
      status: 'active'
    });
    console.log('✅ Firestore Write Success! Document ID:', user.uid);

    // 3. Test Firestore (Read data)
    const doc = await db.collection('testUsers').doc(user.uid).get();
    console.log('✅ Firestore Read Success! Data:', doc.data());

  } catch (error) {
    console.error('❌ Firebase Test Failed:', error.message);
    console.error('Full error stack:', error.stack); // Detailed debug
  }
}

// Run the test
testFirebase();