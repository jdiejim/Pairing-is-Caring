class Mentor {
  constructor(obj) {
    this.name = obj['Name'];
    this.slack = obj['Slack'];
    this.email = obj['Email'];
    this.phone = obj['Phone'];
    this.tags = obj['Technical'].split(',');
    this.location = obj['Location'];
    this.preferred = obj['Preferred'];
    this.jobTitle = obj['JobTitle'];
    this.employer = obj['Employer'];
    this.background = obj['Background'];
    this.availability = obj['Availability'];
  }
}

export default Mentor
