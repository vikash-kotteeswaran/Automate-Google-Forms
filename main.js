let Entries = [[[132611309], null],[[1623360724],["22-30","31-40","above 40"]],[[1014788919],["Male","Female"]],[[858318502],["Bachelor’s degree","Master’s Degree", "PhD", "Diploma"]],[[98663492],["Less than a year","2-5 years","more than 5 years"]],[[612247791],["Yes","No"]],[[272250964],["Yes","No"]],[[1410640120, 1637552916, 206007346, 1816680787, 1234067910],["Strongly Agree","Agree","Neutral","Disagree","Strongly Disagree"]],[[699077074],["Yes","No"]],[[1251131604],["Yes","No","At times"]],[[315066917],["On the Job","Off the Job","Hybrid"]],[[1821480625],["Meeting skill-based requirements","Role clarity","Better understanding of job","Achieving my targets"]],[[1841684196],["Yes","No","To an Extent"]],[[1087336700],["Yes","No"]],[[1419033836],["Sometimes","Always","Never"]],[[1248265334],["Superiors","HR Department","Colleagues"]],[[2078371344],["Working Conditions","Inter-Departmental problems","Performance appraisal","Reward and recognition"]],[[474982667],["Yes","No"]],[[255661886],["Better opportunities","Work pressure","Family reasons","Environment"]],[[1185320519],["Salary structure","Work environment","Job security","Benefits and other welfare"]],[[461846137],["Highly satisfied","Satisfied","Neutral","Dissatisfied","Highly dissatisfied"]],[[1763264903],["Yes","No","To an extent"]], [[59656465],["Yes","No","Moderate"]]];

let fNames = ['shivani', 'isha', 'divya', 'mansi', 'mazida', 'pooja', 'kajal', 'meena', 'sonam', 'shakshi sagar', 'pooja', 'anita', 'neetu', 
'anshu', 'kanika kathuria', 'manju', 'shakshi', 'reena', 'neha', 'khushboo', 'aasmin', 'jyoti', 'riya masi', 'rekha', 'leela', 'isha', 'gulshan', 
'priya jain', 'pooja', 'rakhi payal', 'varsha', 'sunita', 'nitu kumari', 'vandana', 'roshni', 'parveen', 'kavita', 'sarojni', 'nagina','tapas das',
'priyanka', 'khushbu', 'deeya kumari', 'anjali juneja', 'champa karketta', 'anshu', 'monika', 'rimmi singh', 'aanamika misra', 'nagma khatoon']

let mNames = ['barjraj', 'ramdin verma', 'sharat chandran', 'birender mandal', 'amit', 'kushal', 'kasid', 'shiv prakash', 'vikram singh', 'sanjay', 'abhi', 
    'ram dutt gupta', 'khadak singh','gurmit singh', 'chanderpal', 'aman', 'khursid', 'rajeev', 'durgesh', 'nahar singh', 'ram kumar', 'sunder paal', 'maansingh aswal', 
    'rohit', 'sparsh', 'santosh', 'punit khandelwal', 'dinesh', 'gulshan', 'arvind kumar yadav', 'nausad', 'shiv shakti singh', 'moti lal', 'kausal kumar', 'mohabbat ali', 
    'raj kumar', 'jaswant singh', 'sevak pitambar lal', 'chotelal', 'rupesh', 'dharam singh', 'manoj yadav manoj', 'ram singh', 'preetam kumar', 'ram kumar', 
    'hemant', 'pankaj kumar', 'mohan singh', 'vinit katariya', 'vikash']

const formURL = "https://docs.google.com/forms/d/e/1FAIpQLSe31ekFOc1bfUf6yMJ4ncVjvNueLg6NgqmdGtoOefr3l83xxA/viewform?emailAddress=vikkykotty@gmail.com";

let preFilledURLs = [];

let autoFill = (name, gender) => {
    let preFilledURL = formURL;

    for(let qns of Entries){
        for(let sqns of qns[0]){
            if(sqns == 132611309){
                preFilledURL+=`&entry.${sqns}=${name}`;
            }else if(sqns == 1014788919){
                preFilledURL+=`&entry.${sqns}=${gender}`;
            }else{
                let ans = qns[1];
                preFilledURL+=`&entry.${sqns}=${ans[Math.floor(Math.random() * ans.length)]}`;
            }
        }
    }

    return preFilledURL;
}

for(let fn of fNames){
    preFilledURLs.push(autoFill(fn, 'Female'))
}

for(let mn of mNames){
    preFilledURLs.push(autoFill(mn, 'Male'))
}


console.log(preFilledURLs)

