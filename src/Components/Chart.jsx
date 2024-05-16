import React from 'react';

const Chart = ({ percentage }) => {
  const chartStyle = {
    boxShadow: 'inset 0px 0px 0px 20px #DDDDDD',
    borderRadius: '50%',
    height: '152px',
    width: '152px',
    position: 'relative',
    zIndex: 1,
    overflow: 'hidden'
  };

  const chartAfterStyle = {
    content: '',
    position: 'absolute',
    height: '100%',
    width: '100%',
    background: '#635AE3',
    borderRadius: '50%',
    top: '-80%',
    bottom: '-80%',
    left: '-88%',
    right: '-88%',
    zIndex: -1,
    transformOrigin: 'bottom',
    transform: `rotateY(9deg) translate(100px)`,
  };

  const h1Style = {
    position: 'absolute',
    zIndex: 10,
    backgroundColor: '#fff',
    height: 'calc(100% - 40px)',
    width: 'calc(100% - 40px)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50%',
    color: '#635AE3',
    fontWeight: 'bold',
    fontSize: '30px',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
  };

  const getBorderColor = (percentage) => {
    // Adjust the color logic based on your requirements
    if (percentage >= 50) {
      return 'green';
    } else {
      return 'red';
    }
  };

  const dynamicBorderStyle = {
    border: `10px solid ${getBorderColor(percentage)}`,
  };

  return (
    <div className="chart" style={{ ...chartStyle, ...dynamicBorderStyle }}>
      <div style={chartAfterStyle}></div>
      <h1 style={h1Style}>{percentage}%</h1>
    </div>
  );
};

export default Chart;
