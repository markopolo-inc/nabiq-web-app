import { CSSProperties, MouseEventHandler } from 'react';

const Klaviyo = ({ size = 24, onClick, style }: PropTypes) => {
  return (
    <svg
      style={{ ...style }}
      onClick={(e) => onClick && onClick(e)}
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
    >
      <rect y='3.75' width='24' height='16' fill='url(#pattern0_612_1405)' />
      <defs>
        <pattern
          id='pattern0_612_1405'
          patternContentUnits='objectBoundingBox'
          width='1'
          height='1'
        >
          <use xlinkHref='#image0_612_1405' transform='matrix(0.00666667 0 0 0.01 0 -0.25)' />
        </pattern>
        <image
          id='image0_612_1405'
          width='150'
          height='150'
          xlinkHref='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAYAAAA8AXHiAAAFBUlEQVR4Ae3dPYgkRRiA4e84QQRB4QINTEw00EA00ciLNDM0MFJEA1EQBDMRBcFAEMwMDAThAuFyIxVBE4000MTExEBQOBDhROULBoah+qe6q2el6zlYdrf65+CdZ2uW2umeCP8UUEABBRRQQAEFFFBAAQUUUEABBRRQQAEFFFBAAQUUUEABBRRQQAEFFFBAAQUUUEABBRRQQAEFFFBAAQUUUEABBRRQQAEFFFBAgf97gYci4qoPDVYYeKCE/KuI+NeHBisMPAGWH6LWk8i1EqocM2PBthTbHxFxBSyAlgIaOu6FIVRmLNiG0EyNfzOGCiywpgCVtt+MiPvAgqeEY83YW1OozFjQ1QL7KSJuBQucWjhT+z86B5UZC7wpSMfbP5qLCiywjuGMff1bRNwBFjBjSJZse6YGlRkLwDnIvqhFBRZYU7D+jIh7wQJlCkrt9teXoDJjgTgG7YeIuAwWJGNIarf9ExEPL0VlxoJxCNwHa1CBBVYJ1q8RcTtYcJRwrBl7ai0qMxaUpwCvt0AFFljHsG5ExF1gQXGMosXXL7dCZcaC8wDyu4i4BBYQBxAtPv8dEcWLTtdAc/kXpO+uATR0LFh9w/p57kuNhwANjYPVN6zHh2CsHQerX1ifrMUzdjxYfcIavTx+DMzcbWD1Ceu5uUCW7gdWf7AWvdS4FhhYfcH6a+lLjcHqC0rtAukbtUCW7m/G6gdiXh5/y1IotceB1Q+s2ZfH1yIq7Q9WH7A+LD34W46BtX9Y+VLjqsvjW4ADa/+wnm4BpfYcYO0b1me1IFrtD9Z+YeXl8fe0glJ7HrD2C+u1Wgwt9wdrn7BWXR7fAhhY+4OVLzVedXk8WPtDUfsnmtL+77eAsfYcZqx94fwlIm5bi6LF8WDtC1bxnbhaQKk9B1j7gfVp7YO/5f5frnifutLzu7GLgzr6pklbIiqd24x1cRBa/xDmLbPvLD3IFzEG1n5gJdSqm/xvCQ6sfcFKXI9tCWbuucHaH6wfz/lK0SFoYO0PVs5abw494OcaB2ufsM52Nc4QVLD2CStnrc+HHvRzjIO1X1iJ69lzICr9H2DtG9bvEXGl9MBvPQbWvmHlrPXx1ohK5wdr/7AS19XSg7/lGFh9wNrszn1DOMHqA1bOWm8PIdhiHKx+YN2MiPu3QFQ6J1j9wMpZ6+sSgi3GwOoLVuJ6fgtIp+cEqz9YZ1nbAqs/WDlrbXrH5Jy9wOoTVuLadG0LrH5hbbq2BVa/sHLWeuf0l+5W34PVN6zN1rbA6htWzlqbrG2BBVbierHVU+DhPGCBlbCar22BBVbCyo9rh9mmxWewwDrAys9PtkCV5wALrGNYzW6DBBZYx7Dy6ybvEQ0WWKew8laTD659SgQLrFNY+f23EXFpDS6wwCrByrGXwIJjCMea8RsRcfdSXGYsKMfwLb79JFhgjcHKbYvWtsACawrWorUtsMCagpXb36v9XQsssObAql7bAgusObByn6q1LbDAmgsr93tl7lMiWGDVwJq9tgUWWDWwct/rc2YtsMCqhZX7T65tgQXWEliTa1tggbUEVh4z+oabYIG1FFaubT0y9PsWWGAthZXHfR8Rl0u4wAJrDaw89tUSLGMKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiigwMUX+A9S80uZHIAaxwAAAABJRU5ErkJggg=='
        />
      </defs>
    </svg>
  );
};

export default Klaviyo;

interface PropTypes {
  color?: string;
  size?: string | number;
  strokeWidth?: string | number;
  style?: CSSProperties;
  onClick?: MouseEventHandler<SVGElement>;
}
