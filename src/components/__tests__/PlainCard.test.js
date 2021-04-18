import * as React from 'react';
import { render, screen } from '@testing-library/react';
import PlainCard from '../PlainCard';

const itemTitle = 'Dear Instructional Designer';
const itemDesc =
  'The four-season podcast about the instructional design journey.';
const itemUrl = 'https://www.dearinstructionaldesigner.com/';
const imgAsset = {
  hotspot: null,
  crop: null,
  asset: {
    _id: 'image-01fb1f1ae7e6a1d83e5f11b1cb4851dcdb99617d-3248x2786-png',
    metadata: {
      preview:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAARCAYAAADdRIy+AAAACXBIWXMAAAsSAAALEgHS3X78AAADZUlEQVQ4y32U7U+bVRiH928YE/2gJn7wmxarEUoMNFlmfEkG6EQwumQiiibU4ZY0MHSKjnSsW7fCQGgdHW/KBowto2yjIoLQ8tIWFWgoLYht6WBS+kJfLp+nEaTb6kl+eZ6cnHOd+77P79z7EokE4hC/4XCYtTU/fv86wVCEyHaMSGQ7OS8qEokQi24Tj/2reExQnEAgwPLyMg6Hg317gZ67WxjH3RgGF+kwLXPVNEd33wDtbW10dXZwZ6Cf+SkTbvsQbtsQfpeVSPAesVgseVgoFEoF2p3rHPvOglx5R9AQr392CfkbRWRnvkDBq7koPymiW1OOSVfOT4LsxgY2fU72jhTgzNwKZbW9SEv1SEtayHyrkmeezeTJxx8h+7mnKT2US+tXhQxqijCeL2ay51vurc4l9+4oBbjkWkXfYeSL+j5ONvTx5alGFOUVHHn/PT798Ajqr5UMtZ/Gek2N7cY5lsw9BNdX2ctIAW6sbzAzbWdk1MLo+DRjv05gGr6N0XSDW8MDjJlNzM4OM7/wM4vOMTzeOcKRQHrgysoKP3R1UVtbi0ql4qJeS/M1DfU3VTQY69APn6N5XIVmohqNuZreeQN/BZbTA61WKwqFgqysLGQyGQffPkDxsf0cVMrIq5Rx+KycwraXyLn8BJmXHqV88BA2nzk90Gaz8XlFBbm5ueTk5JBfcIB3S16m4AMJb5ZkcLhaxjv6F5G3PUW24TEUtwqx/x/wTyHlnitXOK/RoNVq0esaadWpaWmqQddyisvdar4fOUODpYaGqRquOzrwBFbSA8OCMX1eL0tLS0LxZ7GYJxgf/YWZKQsLf8yyuPAbDvfvuPxOfFseApG/icaj6YEJ4RmJrne5XBhaDZyoOkFlVRUX6i/Qf9XAYE+jcNtdWN2zbIZDu2be8eADxhYlvs3JyUlKSz9CIpEgycggr+A1qo4X8k3lfuqaiumfbhdS9Qjr4ymw3Qjvn5yemqLs4zKkz0uRSqXk57+C8mgeJ4/LOX02H6O5EX9QqB2JlFeSBO4Ne9ePQuf4UfDjmbo61Go1+uaL9HY2cb1Ty+2bOuadIwS3N8TVKcHspny/xMtZ8/nwejxCO1vDL8rrYd3nZXPjrtDKtpKt62F7HwQKlxKPRoW+F03Wcydq8f+/LHgoTNQ/8Rp/u8TJKEcAAAAASUVORK5CYII=',
    },
  },
};

describe('PlainCard', () => {
  it('renders a plain card without an image', () => {
    render(
      <PlainCard itemTitle={itemTitle} itemDesc={itemDesc} itemUrl={itemUrl} />
    );
    expect(screen.getByText(itemTitle)).toBeInTheDocument();
    expect(screen.getByText(itemDesc)).toBeInTheDocument();
    expect(
      screen.getByRole('link', {
        name: /Dear Instructional Designer The four-season podcast about the instructional design journey./i,
      })
    ).toBeInTheDocument();
  });
  it('renders a plain card with an image', () => {
    render(
      <PlainCard
        itemTitle={itemTitle}
        itemDesc={itemDesc}
        itemUrl={itemUrl}
        imgAsset={imgAsset}
      />
    );
    expect(screen.getByText(itemTitle)).toBeInTheDocument();
    expect(screen.getByText(itemDesc)).toBeInTheDocument();
    expect(
      screen.getByRole('link', {
        name: /Dear Instructional Designer The four-season podcast about the instructional design journey./i,
      })
    ).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});
