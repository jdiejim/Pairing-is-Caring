class Mentor {
  constructor(obj) {
    this.name = obj['Name'];
    this.slack = obj['Slack'];
    this.email = obj['Email'];
    this.tags = obj['Technical'].split(',');
    this.location = obj['Location'];
    this.preferred = obj['Preferred'];
    this.jobTitle = obj['JobTitle'];
    this.background = obj['Background'];
    this.availability = obj['Availability'];
  }
}

export default Mentor
