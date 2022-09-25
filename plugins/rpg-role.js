/*let handler = m => m

handler.before = function (m) {
  let user = global.db.data.users[m.sender]
        let role = (user.level <= 20) ? 'Beginner'
          : ((user.level >= 20) && (user.level <= 40)) ? 'Commander Elite'
          : ((user.level >= 40) && (user.level <= 60)) ? 'The Commander Hero'
          : ((user.level >= 60) && (user.level <= 80)) ? 'The Commander Elite Hero'
          : ((user.level >= 80) && (user.level <= 100)) ? 'The Commander Elite Super Strong Hero'
          : ((user.level >= 100) && (user.level <= 120)) ? 'The Commander Elite Super Strong Shadow Hero'
          : ((user.level >= 120) && (user.level <= 140)) ? 'The Commander Legends Shadow Hero'
          : ((user.level >= 140) && (user.level <= 160)) ? 'The Commander Super Legends Shadow Hero'
          : 'Legends'
  user.role = role
  return true
}

module.exports = handler*/

const roles = {
  /*
  'Role Name': <Minimal Level To Obtain this Role>
  */
  'Entity Undetected': 0, 
  'Tier 11-C': 18, 
  'Tier 11-B': 36,
  'Tier 11-A': 54,
  'Tier 10-C': 72,
  'Tier 10-B': 90,
  'Tier 10-A': 108,
  'Tier 9-C': 126,
  'Tier 9-B': 144,
  'Tier 9-A': 162,
  'Tier 8-C': 180,
  'Tier H8-C': 198,  
  'Tier 8-B': 216,
  'Tier 8-A': 234,
  'Tier L7-C': 252,
  'Tier 7-C': 270,
  'Tier H7-C': 288,
  'Tier L7-B': 306,
  'Tier 7-B': 324,
  'Tier 7-A': 342,
  'Tier H7-A': 360,
  'Tier L6-C': 378,
  'Tier 6-C': 396,
  'Tier H6-C': 414,
  'Tier L6-B': 432,
  'Tier 6-B': 450,
  'Tier H6-B': 468,
  'Tier 6-A': 486,
  'Tier H6-A': 504,
  'Tier 5-C': 522,
  'Tier L5-B': 540,
  'Tier 5-B': 558,
  'Tier 5-A': 576,
  'Tier H5-A': 594,
  'Tier L4-C': 612,
  'Tier 4-C': 630,
  'Tier H4-C': 648,
  'Tier 4-B': 666,
  'Tier 4-A': 684,
  'Tier 3-C': 702,
  'Tier 3-B': 720,
  'Tier 3-A': 738,
  'Tier H3-A': 756,
  'Tier L2-C': 774,
  'Tier 2-C': 792,
  'Tier 2-B': 810,
  'Tier 2-A': 828,
  'Tier L1-C': 846,
  'Tier 1-C': 864,
  'Tier H1-C': 882,
  'Tier 1-B': 900,
  'Tier H1-B': 918,
  'Tier L1-A': 940,
  'Tier 1-A': 960,
  'Tier H1-A': 1000,
  'Tier 0': 10000
}

module.exports = {
  before (m) {
    let user = global.db.data.users[m.sender]
    let level = user.level
    let role = (Object.entries(roles).sort((a, b) => b[1] - a[1]).find(([,minLevel]) => level >= minLevel) || Object.entries(roles)[0])[0]
    user.role = role
    return true
  }
}
