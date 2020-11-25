import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import BookedCard from '../../../components/bookedCard';
export default function index() {
  return (
    <ScrollView style={{paddingHorizontal: 20, paddingVertical: 10}}>
      <BookedCard
        source="https://media1.popsugar-assets.com/files/thumbor/RgXyD95Mslu69qvfqnG-VoR2kY8/0x279:3078x4300/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2020/05/01/641/n/2589278/0fedf8425eac30ff3248b9.68958552_/i/Most-Gorgeous-Photos-David-Beckham.jpg"
        name="Nguyen Van A"
        date="18-10-1998, 4:00"
        price={1500000}
        rate={4}
        status="Đã xong"
      />
      <BookedCard
        source="https://media1.popsugar-assets.com/files/thumbor/RgXyD95Mslu69qvfqnG-VoR2kY8/0x279:3078x4300/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2020/05/01/641/n/2589278/0fedf8425eac30ff3248b9.68958552_/i/Most-Gorgeous-Photos-David-Beckham.jpg"
        name="Nguyen Van A"
        date="18-10-1998, 4:00"
        price={1500000}
        rate={4}
        status="Dang cho"
      />
      <BookedCard
        source="https://media1.popsugar-assets.com/files/thumbor/RgXyD95Mslu69qvfqnG-VoR2kY8/0x279:3078x4300/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2020/05/01/641/n/2589278/0fedf8425eac30ff3248b9.68958552_/i/Most-Gorgeous-Photos-David-Beckham.jpg"
        name="Nguyen Van A"
        date="18-10-1998, 4:00"
        price={1500000}
        rate={4}
        status="Đã xong"
      />
      <BookedCard
        source="https://media1.popsugar-assets.com/files/thumbor/RgXyD95Mslu69qvfqnG-VoR2kY8/0x279:3078x4300/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2020/05/01/641/n/2589278/0fedf8425eac30ff3248b9.68958552_/i/Most-Gorgeous-Photos-David-Beckham.jpg"
        name="Nguyen Van A"
        date="18-10-1998, 4:00"
        price={1500000}
        rate={4}
        status="Dang cho"
      />
      <BookedCard
        source="https://media1.popsugar-assets.com/files/thumbor/RgXyD95Mslu69qvfqnG-VoR2kY8/0x279:3078x4300/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2020/05/01/641/n/2589278/0fedf8425eac30ff3248b9.68958552_/i/Most-Gorgeous-Photos-David-Beckham.jpg"
        name="Nguyen Van A"
        date="18-10-1998, 4:00"
        price={1500000}
        rate={4}
        status="Dang cho"
      />
    </ScrollView>
  );
}
