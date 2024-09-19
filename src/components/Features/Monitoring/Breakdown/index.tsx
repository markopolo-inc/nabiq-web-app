// import { useGetCohortForCampaignsQuery } from 'src/store/monitoring/monitoring.api';
import './index.scss';

const Breakdown: React.FC<{
  timeRange?: string;
  campaignId: string;
}> = ({ campaignId: _ }) => {
  // const { data } = useGetCohortForCampaignsQuery(campaignId);

  return (
    <div id='wrapper'>
      <span className='label'>Root</span>
      <div className='branch'>
        <div className='entry'>
          <span className='label'>Entry-1</span>
          <div className='branch'>
            <div className='entry'>
              <span className='label'>Entry-1-1</span>
              {/* <div className='branch lv3'>
                <div className='entry sole'>
                  <span className='label'>Entry-1-1-1</span>
                </div>
              </div> */}
            </div>
            <div className='entry'>
              <span className='label'>Entry-1-2</span>
              {/* <div className='branch lv3'>
                <div className='entry sole'>
                  <span className='label'>Entry-1-2-1</span>
                </div>
              </div> */}
            </div>
            <div className='entry'>
              <span className='label'>Entry-1-3</span>
              {/* <div className='branch lv3'>
                <div className='entry sole'>
                  <span className='label'>Entry-1-3-1</span>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        <div className='entry'>
          <span className='label'>Entry-2</span>
        </div>
        <div className='entry'>
          <span className='label'>Entry-3</span>
          <div className='branch'>
            <div className='entry'>
              <span className='label'>Entry-3-1</span>
            </div>
            <div className='entry'>
              <span className='label'>Entry-3-2</span>
            </div>
            <div className='entry'>
              <span className='label'>Entry-3-3</span>
              {/* <div className='branch lv3'>
                <div className='entry'>
                  <span className='label'>Entry-3-3-1</span>
                </div>
                <div className='entry'>
                  <span className='label'>Entry-3-3-2</span>
                  <div className='branch lv4'>
                    <div className='entry'>
                      <span className='label'>Entry-3-3-2-1</span>
                    </div>
                    <div className='entry'>
                      <span className='label'>Entry-3-3-2-2</span>
                    </div>
                  </div>
                </div>
                <div className='entry'>
                  <span className='label'>Entry-3-3-3</span>
                </div>
              </div> */}
            </div>
            <div className='entry'>
              <span className='label'>Entry-3-4</span>
            </div>
          </div>
        </div>
        <div className='entry'>
          <span className='label'>Entry-4</span>
        </div>
        <div className='entry'>
          <span className='label'>Entry-5</span>
        </div>
      </div>
    </div>
  );
};

export default Breakdown;
