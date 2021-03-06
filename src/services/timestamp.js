import moment from 'moment';

const TimeStamp = () => {
    
            
    let timestampStr="";

    const getTimeStamp = (dateNtime) => {
        //console.log(dateNtime)
            var now = new Date();
            var then = dateNtime;

            var msDiff = new Date().getTime() - new Date(then).getTime();    //Future date - current date
            var gettingDays = Math.floor(msDiff / (1000 * 60 * 60 * 24));


            if (gettingDays >=365 ){
                timestampStr =  Math.floor(gettingDays/365)+" years ago";

            }
            else if (gettingDays >= 31) {
                timestampStr =  Math.floor(gettingDays/31)+" months ago";
            }
            else if(gettingDays > 0){
                timestampStr=gettingDays+" days ago"
            }else{
               
                var timestamp = moment.utc(moment(now, "DD/MM/YYYY HH:mm:ss").diff(moment(then, "DD/MM/YYYY HH:mm:ss"))).format("HH:mm:ss");
                
               
                if (parseInt(timestamp.substring(0, 2)) > 0) timestampStr = timestamp.substring(0, 2) + " hours ago";
                else if (parseInt(timestamp.substring(3, 5)) > 0) timestampStr = timestamp.substring(3, 5) + " minutes ago";
                else if (parseInt(timestamp.substring(6, 8)) > 0) timestampStr = timestamp.substring(6, 8) + " seconds ago";
                else timestampStr = "now";

            }
            return timestampStr
    }

    return {
        timestampStr,
        getTimeStamp
    }
}

export default TimeStamp;
