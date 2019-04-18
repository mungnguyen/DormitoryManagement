import React, {PropTypes} from 'react';
import KhuNha from './khuNha';

const KNList = ({khunhas}) => {
  return (
        khunhas.map(khunha => 
         <KhuNha 
            tenKhuNha={khunha.tenKhuNha}
            khuNhaId={khunha.khuNhaId} 
          />
        )
  );
};

// KNList.propTypes = {
//   khunhas: PropTypes.array.isRequired
// };

export default KNList;