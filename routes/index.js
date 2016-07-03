
/*
 * GET home page.
 */

var data = [
            {
            allergy: [{
            disease: "cancer",
            symptoms: "xxx",
            },
            {
                disease: "cough",
                symptoms: "yyy"
            }],
            patient_visits: [
            {
                venue : "San Jose",
                date : "June 20th 2016"
            },
            {
                venue : "San Francisco",
                date : "June 26th 2016"
            }]
        }];

exports.index = function(req, res){
  res.render('index', {allergy : data[0].allergy , visits : data[0].patient_visits});
};

exports.getAllergies = function(req, res){
  res.render('allergies',{message:'Allergy Details'});
};