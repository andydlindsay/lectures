import ParkListItem from './ParkListItem';

const ParkList = (props) => {
  console.log(props);

  const mappedParks = props.parks.map((park) => {
    return (
      <ParkListItem key={park.id} park={park} />
    );
  });

  return (
    <div>
      { mappedParks }
    </div>
  );
};

export default ParkList;
