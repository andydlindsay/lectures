import ParkListItem from './ParkListItem';

const ParkList = (props) => {
  const mappedParks = props.parks.map((park) => {
    return (
      <ParkListItem
        key={park.id}
        park={park}
        openModal={props.openModal}
        setSelectedPark={props.setSelectedPark}
      />
    );
  });

  return (
    <div>
      { mappedParks }
    </div>
  );
};

export default ParkList;
