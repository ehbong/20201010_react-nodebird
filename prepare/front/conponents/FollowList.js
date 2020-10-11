import React, { useMemo } from 'react';
import { List, Card, Button } from 'antd';
import styled from 'styled-components';
import { StopOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';

const ListWarpper = styled(List)`
  marginbottom: 20;
`;

function FollowList({ header, data }) {
  const style = useMemo(
    () => ({
      margin: '10px 0',
      textAlign: 'center',
    }),
    [],
  );

  const grid = useMemo(() => ({ gutter: 4, xs: 2, md: 3 }), []);
  const ListItemStyle = useMemo(() => ({ marginTop: 20 }), []);
  return (
    <ListWarpper
      grid={grid}
      size="small"
      header={<div>{header}</div>}
      loadMore={
        <div style={style}>
          <Button>더보기</Button>
        </div>
      }
      bordered
      dataSource={data}
      renderItem={(item) => (
        <List.Item style={ListItemStyle}>
          <Card actions={[<StopOutlined key="stop" />]}>
            <Card.Meta description={item.nickname} />
          </Card>
        </List.Item>
      )}
    />
  );
}

FollowList.propTypes = {
  header: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
};

export default FollowList;
