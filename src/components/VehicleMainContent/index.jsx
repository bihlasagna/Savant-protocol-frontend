import cx from 'classnames';
import Box from 'components/Box';
import './index.scss';

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

const VehicleMainContent = ({ children, ...rest }) => {
  return (
    <div className="vehicle-main-content">
      <div className="showcase-one"></div>
      <div className="showcase-two"></div>
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
