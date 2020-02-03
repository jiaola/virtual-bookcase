import React from 'react';
import { storiesOf } from '@storybook/react';

import ShelfItem from '../ShelfItem';

storiesOf('Button', module)
    .add('with primary', () => <ShelfItem label="Primary Button" />)
    .add('with outline', () => <ShelfItem
        label="Ouline Button"
        style={{ background: 'transparent', border: '3px solid #fecd43' }}
    />)
    .add('with rounder corners', () => <ShelfItem
        label="Rounded Button"
        style={{ borderRadius: '15px' }}
    />)
    .add('disabled', () => <ShelfItem disabled
                                   label="Disabled Button"
                                   style={{ background: 'gray' , border: 'gray', cursor: 'not-allowed' }}
    />)