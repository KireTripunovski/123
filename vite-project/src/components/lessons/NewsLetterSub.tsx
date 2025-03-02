// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./NewsLetterSub.css"; // Import the CSS file

// interface NewsletterSubscription {
//   id: number;
//   user_id: number;
//   email: string;
//   subscribed_at: string;
// }

// const NewsletterSubscriptionsTable: React.FC = () => {
//   const [subscriptions, setSubscriptions] = useState<NewsletterSubscription[]>(
//     []
//   );
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

//   // Fetch newsletter subscriptions from JSON Server
//   useEffect(() => {
//     const fetchSubscriptions = async () => {
//       try {
//         const response = await axios.get<NewsletterSubscription[]>(
//           "http://localhost:3002/newsletter_subscription"
//         );
//         setSubscriptions(response.data);
//         setLoading(false);
//       } catch {
//         setError("Failed to fetch newsletter subscriptions.");
//         setLoading(false);
//       }
//     };

//     fetchSubscriptions();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   return (
//     <div className="newsletter-table-container">
//       <h2 className="table-title">Newsletter Subscriptions</h2>
//       <table className="fancy-table">
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>User ID</th>
//             <th>Email</th>
//             <th>Subscribed At</th>
//           </tr>
//         </thead>
//         <tbody>
//           {subscriptions.map((subscription) => (
//             <tr key={subscription.id}>
//               <td>{subscription.id}</td>
//               <td>{subscription.user_id}</td>
//               <td>{subscription.email}</td>
//               <td>{new Date(subscription.subscribed_at).toLocaleString()}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default NewsletterSubscriptionsTable;
