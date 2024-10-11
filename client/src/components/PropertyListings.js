import { useQuery, gql } from '@apollo/client';

const GET_LISTINGS = gql`
  query GetListings {
    listings {
      id
      title
      price
      location
    }
  }
`;

const PropertyListings = () => {
  const { loading, error, data } = useQuery(GET_LISTINGS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Property Listings</h1>
      <div className="listings-grid">
        {data.listings.map((listing) => (
          <div key={listing.id} className="listing">
            <h2>{listing.title}</h2>
            <p>{listing.location}</p>
            <p>${listing.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyListings;
