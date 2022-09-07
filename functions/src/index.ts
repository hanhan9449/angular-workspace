import * as functions from "firebase-functions";


export const updatePostDescription =
  functions.firestore.document("post/{postId}").onWrite((change) => {
    const {before, after} = change;
    const bContent = before.data()?.content;
    const aContent = after.data()?.content;
    functions.logger.info("before content", bContent);
    functions.logger.info("after content", aContent);
    functions.logger.debug("isEqual", bContent === aContent);
    if (bContent !== aContent) {
      return after.ref.set({description: (aContent ?? "").slice(0, 200)},
          {merge: true});
    }
    return;
  });
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
