import Box from 'components/Box';
import Spinner from 'components/Spinner';
import ActivityItem from 'components/ActivityItem';
import Progressbar from 'components/Progressbar';

import './index.scss';

const ballanceSheetItem = ['ASSETS', 'LIABILITIES'];

const topHolders = [
  'BIGMANZYX.ETH',
  '9DN6...0S67',
  '123ABC.ETH',
  'MUNGUS.ETH',
  '2F7Y...901L',
  'JACK.ETH',
  '2F7Y...901L',
  '2F7Y...901L',
  'JACK.ETH',
  '2F7Y...901L',
];

const activities = [
  {
    type: 'FUNDED',
    value: 'Ξ0.15',
    title: 'Summer Street to the Moon!',
    timeAgo: '2',
    address: 'BIGMANZYX.ETH',
  },
  {
    type: 'FUNDED',
    value: 'Ξ0.03',
    title: '',
    timeAgo: '2',
    address: 'BIGMANZYX.ETH',
  },
  {
    type: 'FUNDED',
    value: 'Ξ1',
    title: '',
    timeAgo: '3',
    address: 'BIGMANZYX.ETH',
  },
  {
    type: 'DISTRIB',
    value: 'Ξ0.01',
    title: '',
    timeAgo: '4',
    address: 'MUNGUS.ETH',
  },
  {
    type: 'FUNDED',
    value: 'Ξ0.46',
    title: '',
    timeAgo: '6',
    address: '2F7Y...901L',
  },
  {
    type: 'FUNDED',
    value: 'Ξ2.5',
    title: 'Best Building Around!',
    timeAgo: '7',
    address: 'JACK.ETH',
  },
];

const VehicleMainContent = ({ children, ...rest }) => {
  return (
    <div className="vehicle-main-content">
      <div className="showcase-one flex">
        <div className="line-graph flex-1 flex flex-col">
          <div>
            <Spinner data={['TREASURY', 'PRICE']} />
          </div>
        </div>
        <div className="action-group flex-1 flex flex-col">
          <Progressbar />
        </div>
      </div>
      <div className="showcase-two flex flex-row">
        <div className="ballance-sheet flex-1">
          <Box title="BALLANCE SHEET">
            <Spinner data={ballanceSheetItem} />
            <div className="ballance-sheet-content">
              <div>TREASURY:</div>
              <div>OWNER WALLET:</div>
              <div>OFF-CHAIN:</div>
              <div>OTHER:</div>
            </div>
          </Box>
        </div>
        <div className="activity flex-1">
          <Box title="ACTIVITY">
            {activities.map((activity, index) => (
              <ActivityItem activity={activity} key={index} />
            ))}
          </Box>
        </div>
      </div>
      <div className="showcase-three flex flex-row">
        <div className="operating-agreement flex flex-row">
          <Box title="OPERATING AGREEMENT">
            <div className="operating-agreement-content">
              LIMITED LIABILITY COMPANY OPERATING AGREEMENT FOR 15 SUMMER STREET
              DAO This LIMITED LIABILITY COMPANY OPERATING AGREEMENT (together
              with the schedules and exhibits attached hereto, this
              “Agreement”), dated as of _____________, 2020 by and among 15
              Summer Street DAO (the “Company”) and the individuals and entities
              whose names appear on Schedule A hereto (individually, a “Member,”
              and collectively, the “Members”). Capitalized terms used in this
              Agreement and not otherwise defined shall have the meanings
              ascribed to such terms in Article I. WHEREAS, the Company was
              formed as a limited liability company under the laws of the New
              York by the filing of its Articles of Organization (as amended,
              modified, restated or supplemented from time to time, the
              “Articles”) with the Office of theSecretary of State of the State
              of New York (the “Department of State”) and the Members hereby
              adopt and ratify the Articles and all acts taken in connection
              therewith;
            </div>
            <div className="pagination text-white mt-4">1/50</div>
          </Box>
          <Box topHolders title="TOP 10 HOLDERS">
            {topHolders.map((item, index) => (
              <div className="top-holder-item" key={index}>
                <span className="mr-8">{index + 1}</span>.{item}
              </div>
            ))}
          </Box>
        </div>
      </div>
      <div className="additional-financial-info"></div>
    </div>
  );
};

export default VehicleMainContent;
