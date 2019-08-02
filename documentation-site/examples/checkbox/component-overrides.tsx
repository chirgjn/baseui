import * as React from 'react';
import {Block} from 'baseui/block';
import {Checkbox} from 'baseui/checkbox';
import Alert from 'baseui/icon/alert';

const CustomCheckmark = ({checked}: {checked: boolean}) => (
  <Block
    color={checked ? 'primary' : 'mono700'}
    marginTop="3px"
    marginRight="3px"
  >
    <Alert />
  </Block>
);

export default () => {
  const [checked, setChecked] = React.useState(true);
  return (
    <Checkbox
      checked={checked}
      onChange={() => setChecked(!checked)}
      overrides={{Checkmark: CustomCheckmark}}
    >
      With style overrides
    </Checkbox>
  );
};