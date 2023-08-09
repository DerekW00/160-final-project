import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { _52884432Icon } from './_52884432Icon';
import { _52884433Icon } from './_52884433Icon';
import classes from './Calendar.module.css';
import { Frame13Icon } from './Frame13Icon';
import { Frame14Icon } from './Frame14Icon';
import { Frame15Icon } from './Frame15Icon';
import { Frame15Icon2 } from './Frame15Icon2';
import { Line5Icon } from './Line5Icon';
import { Line6Icon } from './Line6Icon';
import React from 'react';

interface Props {
  className?: string;
}
/* @figmaId 112:1298 */
export const Calendar: FC<Props> = memo(function Calendar(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.frame5}>
        <div className={classes.rectangle14}></div>
        <div className={classes.august}>August</div>
        <div className={classes.cardBackground}></div>
        <div className={classes.eventTitle}>Event Title</div>
        <div className={classes.Location}>📍 Location</div>
        <div className={classes.Time}>🕒 Time</div>
        <div className={classes.eventType}>Event Type</div>
        <div className={classes._10PeopleAreGoing}>10 people are going!</div>
        <div className={classes._52884433}>
          <_52884433Icon className={classes.icon} />
        </div>
        <div className={classes.cardBackground2}></div>
        <div className={classes.eventTitle2}>Event Title</div>
        <div className={classes.Location2}>📍 Location</div>
        <div className={classes.Time2}>🕒 Time</div>
        <div className={classes.eventType2}>Event Type</div>
        <div className={classes._10PeopleAreGoing2}>10 people are going!</div>
        <div className={classes.frame15}>
          <Frame15Icon className={classes.icon2} />
        </div>
        <div className={classes.rectangle142}></div>
        <div className={classes.september}>September</div>
        <div className={classes.cardBackground3}></div>
        <div className={classes.eventTitle3}>Event Title</div>
        <div className={classes.Location3}>📍 Location</div>
        <div className={classes.Time3}>🕒 Time</div>
        <div className={classes.eventType3}>Event Type</div>
        <div className={classes._10PeopleAreGoing3}>10 people are going!</div>
        <div className={classes.frame13}>
          <Frame13Icon className={classes.icon3} />
        </div>
        <div className={classes.cardBackground4}></div>
        <div className={classes.frame14}>
          <Frame14Icon className={classes.icon4} />
        </div>
        <div className={classes.eventTitle4}>Event Title</div>
        <div className={classes.Location4}>📍 Location</div>
        <div className={classes.Time4}>🕒 Time</div>
        <div className={classes.eventType4}>Event Type</div>
        <div className={classes._10PeopleAreGoing4}>10 people are going!</div>
        <div className={classes.cardBackground5}></div>
        <div className={classes.eventTitle5}>Event Title</div>
        <div className={classes.Location5}>📍 Location</div>
        <div className={classes.Time5}>🕒 Time</div>
        <div className={classes.eventType5}>Event Type</div>
        <div className={classes._10PeopleAreGoing5}>10 people are going!</div>
        <div className={classes._52884432}>
          <_52884432Icon className={classes.icon5} />
        </div>
        <div className={classes.rectangle143}></div>
        <div className={classes.october}>October</div>
        <div className={classes.cardBackground6}></div>
        <div className={classes.eventTitle6}>Event Title</div>
        <div className={classes.Location6}>📍 Location</div>
        <div className={classes.Time6}>🕒 Time</div>
        <div className={classes.eventType6}>Event Type</div>
        <div className={classes.thumbnail}></div>
        <div className={classes.frame152}>
          <Frame15Icon2 className={classes.icon6} />
        </div>
        <div className={classes._10PeopleAreGoing6}>10 people are going!</div>
      </div>
      <div className={classes.background}></div>
      <div className={classes.line5}>
        <Line5Icon className={classes.icon7} />
      </div>
      <div className={classes.myCalendar}>My Calendar</div>
      <div className={classes.frame132}></div>
      <div className={classes.line6}>
        <Line6Icon className={classes.icon8} />
      </div>
    </div>
  );
});
