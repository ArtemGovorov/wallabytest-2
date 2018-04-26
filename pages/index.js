// @flow

import * as React from 'react';

type Props = {
  foo: number,
  bar?: string,
};

const IndexPage = ({ foo, bar }: Props): React.Element => (
  <pre>
    {foo} {bar} text: hi there :)
  </pre>
);

IndexPage.defaultProps = {
  bar: 'I am an example component prop',
};

export default IndexPage;
