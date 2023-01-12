let md ; // month difference
    if(y1<=y2){  // if return year is <= due year
        if(y1 < y2){  // if year is less then no fine
            return 0;
        }else if(y1 === y1){  
            if(m1 < m2){ // if the year is equal and month is less then due mont , no fine.
                return 0;
            }else if(m1 > m2){
                md = m1 - m2;
            }else{
                md = 0;
            }
        };
        
        if(md <= 0){
            if(d2 > d1){ // if year, month, day is equal, no fine.
                return 0;
            }else{
                return (d1 - d2) * 15; // if year, month is equal and day is not equal, fine of 15 Hackos per day.
            }
        }else if(md > 0){
            return md * 500;  // if return month is greater then due month, fine of 500 Hackos per month
        }
    }else if(y1 > y2){
        return 10000; // If return year is higher than due year, fin of 10,000 hackos.
    }