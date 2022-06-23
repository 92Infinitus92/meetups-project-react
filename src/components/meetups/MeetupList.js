import MeetupItem from './MeetupItem'
import classes from './MeetupList.module.css'

function MeetupList(props) {
  return (
    <div>
      <ul className={classes.list}>
        {props.meetups.map((meetup, index) => (
          <MeetupItem
            key={meetup.id}
            id={meetup.id}
            title={meetup.title}
            image={meetup.image}
            address={meetup.address}
            content={meetup.description}
          />
        ))}
      </ul>
    </div>
  )
}

export default MeetupList
