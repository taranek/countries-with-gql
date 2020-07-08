import * as React from 'react';
import Attribute from '../Attribute/Attribute';

type Props = {
  item: object;
}

const AttributeList: React.FC<Props> = ({ item }) => {
  const Attributes = React.useMemo(() => {
    const keys = Object.keys(item);
    return <React.Fragment>
      {keys.map((key) => {
        const hasTruthyValue = !!item[key];
        return hasTruthyValue ? < Attribute key={key} attributeKey={key} value={item[key]} /> : null;
      })}
    </React.Fragment>;
  }, [item]);

  return Attributes;
};

export default AttributeList;
