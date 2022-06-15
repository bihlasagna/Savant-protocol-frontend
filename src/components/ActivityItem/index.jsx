import './index.scss';

const ActivityItem = ({ activity }) => {
  const { type, value, title, timeAgo, address } = activity;

  return (
    <div className="activity-item flex items-center">
      <div className="activity-item-header flex flex-col">
        <div className="activity-type">{type}</div>
        <div className="activity-value">{value}</div>
      </div>
      <div className="activity-item-title text-2xl">{title}</div>
      <div className="activity-item-footer flex flex-col items-end">
        <div className="time-ago text-xs">{timeAgo} H AGO</div>
        <div className="address">{address}</div>
      </div>
    </div>
  );
};

export default ActivityItem;
