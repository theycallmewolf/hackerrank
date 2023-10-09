async function getNumTransactions(username) {
  const userId = await getUserId(username);
  if(!userId) {
    return 'Username Not Found';
  }
  return await getTransactionsCount(userId);

  async function getUserId(name) {
    const url = `https://jsonmock.hackerrank.com/api/article_users?username=${name}`;

    try {
      const userRes = await fetch(url);
      const userResJson = await userRes.json();

      if (userResJson.data.length === 0) return null;

      return userResJson.data[0].id;
    } catch (err) {
      return err;
    }
  }

  async function getTransactionsCount(userId) {
    const url = (userId) => `https://jsonmock.hackerrank.com/api/transactions?&userId=${userId}`;

    try {
      const res = await fetch(url(userId));
      const resJson = await res.json();
      return resJson.total;
    } catch (err) {
      return err;
    }
  }
}

async function main() {
  const res = await getNumTransactions('epaga');
  console.log('[res]', res);
}

main();