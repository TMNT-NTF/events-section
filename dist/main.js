
// var BlockSDK = require('blocksdk');
// var sdk = new BlockSDK();
var sdk = new window.sfdc.BlockSDK();

// state data for the content block
var section_num;
var options;
var preview_data = {
  "sections":[
    {
      "id":"SectionID1",
      "name":"Section 1",
      "events":[
        {
          "badge":"Just Days Away",
          "name":"Event 1",
          "artist":"Artist Name",
          "description":"Event description goes here.",
          "venue":"Event Venue",
          "date":"event date",
          "image":"https://via.placeholder.com/568x420.png?text=Event+Image",
          "url":"https://www.ticketmaster.com"
        },
        {
          "badge":"Just Days Away",
          "name":"Event 2",
          "artist":"Artist Name",
          "description":"Event description goes here.",
          "venue":"Event Venue",
          "date":"event date",
          "image":"https://via.placeholder.com/568x420.png?text=Event+Image",
          "url":"https://www.ticketmaster.com"
        },
        {
          "badge":"Just Days Away",
          "name":"Event 3",
          "artist":"Artist Name",
          "description":"Event description goes here.",
          "venue":"Event Venue",
          "date":"event date",
          "image":"https://via.placeholder.com/568x420.png?text=Event+Image",
          "url":"https://www.ticketmaster.com"
        }
      ]
    },
    {
      "id":"SectionID2",
      "name":"Section 2",
      "events":[
        {
          "badge":"Just Days Away",
          "name":"Event 1",
          "artist":"Artist Name",
          "description":"Event description goes here.",
          "venue":"Event Venue",
          "date":"event date",
          "image":"https://via.placeholder.com/568x420.png?text=Event+Image",
          "url":"https://www.ticketmaster.com"
        },
        {
          "badge":"Just Days Away",
          "name":"Event 2",
          "artist":"Artist Name",
          "description":"Event description goes here.",
          "venue":"Event Venue",
          "date":"event date",
          "image":"https://via.placeholder.com/568x420.png?text=Event+Image",
          "url":"https://www.ticketmaster.com"
        }
      ]
    },
    {
      "id":"SectionID3",
      "name":"Section 3",
      "events":[
        {
          "badge":"Just Days Away",
          "name":"Event 1",
          "artist":"Artist Name",
          "description":"Event description goes here.",
          "venue":"Event Venue",
          "date":"event date",
          "image":"https://via.placeholder.com/568x420.png?text=Event+Image",
          "url":"https://www.ticketmaster.com"
        },
        {
          "badge":"Just Days Away",
          "name":"Event 2",
          "artist":"Artist Name",
          "description":"Event description goes here.",
          "venue":"Event Venue",
          "date":"event date",
          "image":"https://via.placeholder.com/568x420.png?text=Event+Image",
          "url":"https://www.ticketmaster.com"
        },
        {
          "badge":"Just Days Away",
          "name":"Event 3",
          "artist":"Artist Name",
          "description":"Event description goes here.",
          "venue":"Event Venue",
          "date":"event date",
          "image":"https://via.placeholder.com/568x420.png?text=Event+Image",
          "url":"https://www.ticketmaster.com"
        }
      ]
    },
    {
      "id":"SectionID4",
      "name":"Section 4",
      "events":[
        {
          "badge":"Just Days Away",
          "name":"Event 1",
          "artist":"Artist Name",
          "description":"Event description goes here.",
          "venue":"Event Venue",
          "date":"event date",
          "image":"https://via.placeholder.com/568x420.png?text=Event+Image",
          "url":"https://www.ticketmaster.com"
        },
        {
          "badge":"Just Days Away",
          "name":"Event 2",
          "artist":"Artist Name",
          "description":"Event description goes here.",
          "venue":"Event Venue",
          "date":"event date",
          "image":"https://via.placeholder.com/568x420.png?text=Event+Image",
          "url":"https://www.ticketmaster.com"
        },
        {
          "badge":"Just Days Away",
          "name":"Event 3",
          "artist":"Artist Name",
          "description":"Event description goes here.",
          "venue":"Event Venue",
          "date":"event date",
          "image":"https://via.placeholder.com/568x420.png?text=Event+Image",
          "url":"https://www.ticketmaster.com"
        }
      ]
    },
    {
      "id":"SectionID5",
      "name":"Section 5",
      "events":[
        {
          "badge":"Just Days Away",
          "name":"Event 1",
          "artist":"Artist Name",
          "description":"Event description goes here.",
          "venue":"Event Venue",
          "date":"event date",
          "image":"https://via.placeholder.com/568x420.png?text=Event+Image",
          "url":"https://www.ticketmaster.com"
        },
        {
          "badge":"Just Days Away",
          "name":"Event 2",
          "artist":"Artist Name",
          "description":"Event description goes here.",
          "venue":"Event Venue",
          "date":"event date",
          "image":"https://via.placeholder.com/568x420.png?text=Event+Image",
          "url":"https://www.ticketmaster.com"
        },
        {
          "badge":"Just Days Away",
          "name":"Event 3",
          "artist":"Artist Name",
          "description":"Event description goes here.",
          "venue":"Event Venue",
          "date":"event date",
          "image":"https://via.placeholder.com/568x420.png?text=Event+Image",
          "url":"https://www.ticketmaster.com"
        }
      ]
    },
    {
      "id":"SectionID6",
      "name":"Section 6",
      "events":[
        {
          "badge":"Just Days Away",
          "name":"Event 1",
          "artist":"Artist Name",
          "description":"Event description goes here.",
          "venue":"Event Venue",
          "date":"event date",
          "image":"https://via.placeholder.com/568x420.png?text=Event+Image",
          "url":"https://www.ticketmaster.com"
        },
        {
          "badge":"Just Days Away",
          "name":"Event 2",
          "artist":"Artist Name",
          "description":"Event description goes here.",
          "venue":"Event Venue",
          "date":"event date",
          "image":"https://via.placeholder.com/568x420.png?text=Event+Image",
          "url":"https://www.ticketmaster.com"
        },
        {
          "badge":"Just Days Away",
          "name":"Event 3",
          "artist":"Artist Name",
          "description":"Event description goes here.",
          "venue":"Event Venue",
          "date":"event date",
          "image":"https://via.placeholder.com/568x420.png?text=Event+Image",
          "url":"https://www.ticketmaster.com"
        }
      ]
    },
    {
      "id":"SectionID7",
      "name":"Section 7",
      "events":[
        {
          "badge":"Just Days Away",
          "name":"Event 1",
          "artist":"Artist Name",
          "description":"Event description goes here.",
          "venue":"Event Venue",
          "date":"event date",
          "image":"https://via.placeholder.com/568x420.png?text=Event+Image",
          "url":"https://www.ticketmaster.com"
        },
        {
          "badge":"Just Days Away",
          "name":"Event 2",
          "artist":"Artist Name",
          "description":"Event description goes here.",
          "venue":"Event Venue",
          "date":"event date",
          "image":"https://via.placeholder.com/568x420.png?text=Event+Image",
          "url":"https://www.ticketmaster.com"
        },
        {
          "badge":"Just Days Away",
          "name":"Event 3",
          "artist":"Artist Name",
          "description":"Event description goes here.",
          "venue":"Event Venue",
          "date":"event date",
          "image":"https://via.placeholder.com/568x420.png?text=Event+Image",
          "url":"https://www.ticketmaster.com"
        }
      ]
    },
    {
      "id":"SectionID8",
      "name":"Section 8",
      "events":[
        {
          "badge":"Just Days Away",
          "name":"Event 1",
          "artist":"Artist Name",
          "description":"Event description goes here.",
          "venue":"Event Venue",
          "date":"event date",
          "image":"https://via.placeholder.com/568x420.png?text=Event+Image",
          "url":"https://www.ticketmaster.com"
        },
        {
          "badge":"Just Days Away",
          "name":"Event 2",
          "artist":"Artist Name",
          "description":"Event description goes here.",
          "venue":"Event Venue",
          "date":"event date",
          "image":"https://via.placeholder.com/568x420.png?text=Event+Image",
          "url":"https://www.ticketmaster.com"
        },
        {
          "badge":"Just Days Away",
          "name":"Event 3",
          "artist":"Artist Name",
          "description":"Event description goes here.",
          "venue":"Event Venue",
          "date":"event date",
          "image":"https://via.placeholder.com/568x420.png?text=Event+Image",
          "url":"https://www.ticketmaster.com"
        }
      ]
    },
    {
      "id":"SectionID9",
      "name":"Section 9",
      "events":[
        {
          "badge":"Just Days Away",
          "name":"Event 1",
          "artist":"Artist Name",
          "description":"Event description goes here.",
          "venue":"Event Venue",
          "date":"event date",
          "image":"https://via.placeholder.com/568x420.png?text=Event+Image",
          "url":"https://www.ticketmaster.com"
        },
        {
          "badge":"Just Days Away",
          "name":"Event 2",
          "artist":"Artist Name",
          "description":"Event description goes here.",
          "venue":"Event Venue",
          "date":"event date",
          "image":"https://via.placeholder.com/568x420.png?text=Event+Image",
          "url":"https://www.ticketmaster.com"
        },
        {
          "badge":"Just Days Away",
          "name":"Event 3",
          "artist":"Artist Name",
          "description":"Event description goes here.",
          "venue":"Event Venue",
          "date":"event date",
          "image":"https://via.placeholder.com/568x420.png?text=Event+Image",
          "url":"https://www.ticketmaster.com"
        }
      ]
    },
    {
      "id":"SectionID10",
      "name":"Section 10",
      "events":[
      ]
    }
  ]
};

// escape HTML special characters
function htmlEscape(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    // .replace(/'/g, '&#39;') // single quote
    // .replace(/\//g, '&#x2F;'); // forward slash
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function generateBigCard(event) {
  var html = '\
        <tr>\
          <td align="left" valign="top" style="padding: 10px 0;">\
            <table width="100%" cellpadding="0" cellspacing="0" border="0">\
              <tr>\
                <td align="left" valign="top" style="border: 1px solid #e0e0e0;">\
                  <table width="100%" cellpadding="0" cellspacing="0" border="0">\
                    <tr>\
                      <td align="left" valign="top">\
                        <table width="100%" cellpadding="0" cellspacing="0" border="0">\
                          <tr>\
                            <td align="left" valign="top"><a href="' + event["url"] + '" alias="' + event["name"] + '" target="_blank"><img class="width-full" src="' + event["image"] + '" width="568" alt="' + event["name"] + '" style="display: block; border: none; font-family: Arial, Helvetica, sans-serif; font-weight: normal; font-size: 16px; line-height: 20px; color: #000001; mso-line-height-rule: exactly;"></a></td>\
                          </tr>\
                        </table>\
                      </td>\
                    </tr>\
                    <tr>\
                      <td align="left" valign="top">\
                        <table width="100%" cellpadding="0" cellspacing="0" border="0">\
                          <tr>\
                            <td align="left" valign="top" style="padding: 20px;">\
                              <table width="100%" cellpadding="0" cellspacing="0" border="0">';
  if (! options["suppress_big_badge"]) {
    var badge = options["big_badge_text"];
    if (badge == "") badge = event["badge"];
    if (badge != "") {
      html += '\
                                <tr>\
                                  <td align="left" valign="top" style="padding-bottom: 20px; font-family: Arial, Helvetica, sans-serif, Font-Averta-Semibold; font-style: normal; font-weight: 600; font-size: 10px; line-height: 12px; color: #5b955b; mso-line-height-rule: exactly; text-transform: uppercase;">'
                                    + badge +
                                  '</td>\
                                </tr>';
    }
  }
  if (event["artist"] != "") {
    html += '\
                                <tr>\
                                  <td align="left" valign="top" style="font-family: Arial, Helvetica, sans-serif, Font-Averta-Semibold; font-style: normal; font-weight: 600; font-size: 18px; line-height: 23px; color: #262626; mso-line-height-rule: exactly;">'
                                    + event["artist"] +
                                  '</td>\
                                </tr>';
  }
  if (event["name"] != "") {
    html += '\
                                <tr>\
                                  <td align="left" valign="top" style="padding-bottom: 20px; font-family: Arial, Helvetica, sans-serif, Font-Averta-Semibold; font-style: normal; font-weight: 600; font-size: 16px; line-height: 20px; color: #676767; mso-line-height-rule: exactly;">'
                                    + event["name"] +
                                  '</td>\
                                </tr>';
  }
  if (event["venue"] != "") {
    html += '\
                                <tr>\
                                  <td align="left" valign="top" style="font-family: Arial, Helvetica, sans-serif, Font-Averta-Regular; font-style: normal; font-weight: 300; font-size: 16px; line-height: 20px; color: #676767; mso-line-height-rule: exactly;">'
                                    + event["venue"] +
                                  '</td>\
                                </tr>';
  }
  if (!options["suppress_descriptions"] && event["description"] != "") {
    html += '\
                                <tr>\
                                  <td align="left" valign="top" style="padding-top: 20px; font-family: Arial, Helvetica, sans-serif, Font-Averta-Regular; font-style: normal; font-weight: 300; font-size: 16px; line-height: 20px; color: #676767; mso-line-height-rule: exactly;">'
                                    + event["description"] +
                                  '</td>\
                                </tr>';
  }
  if (!options["suppress_dates"] && event["date"] != "") {
    html += '\
                                <tr>\
                                  <td align="left" valign="top" style="padding-top: 20px; font-family: Arial, Helvetica, sans-serif, Font-Averta-Regular; font-style: normal; font-weight: 300; font-size: 14px; line-height: 18px; color: #026CDF; mso-line-height-rule: exactly;">'
                                    + event["date"] +
                                  '</td>\
                                </tr>';
  }
  html += '\
                                <tr>\
                                  <td style="padding-top: 20px;" align="left" valign="top">\
                                    <table class="width-full" cellspacing="0" cellpadding="0" border="0">\
                                      <tr>\
                                        <td style="-webkit-border-radius: 0; -moz-border-radius: 0; border-radius: 0;" bgcolor="#026CDF" align="center">\
                                          <a href="' + event["url"] + '" alias="' + event["name"] + '" target="_blank" style="font-family: Arial, Helvetica, sans-serif, Font-Averta-Semibold; font-weight: 600; font-size: 14px; line-height: 18px; color: #ffffff; text-transform: none; text-decoration: none; padding: 5px 30px; border: 1px solid #026CDF; -webkit-border-radius: 0; -moz-border-radius: 0; border-radius: 0; display: block;">\
                                            See Tickets\
                                          </a>\
                                        </td>\
                                      </tr>\
                                    </table>\
                                  </td>\
                                </tr>\
                              </table>\
                            </td>\
                          </tr>\
                        </table>\
                      </td>\
                    </tr>\
                  </table>\
                </td>\
              </tr>\
            </table>\
          </td>\
        </tr>';
  return html;
}

function generateSmallCard(event) {
  var html = '\
        <tr>\
          <td align="left" valign="top" style="padding: 10px 0;">\
            <table width="100%" cellpadding="0" cellspacing="0" border="0">\
              <tr>\
                <td align="left" valign="top" style="border: 1px solid #e0e0e0;">\
                  <table width="100%" cellpadding="0" cellspacing="0" border="0">\
                    <tr>\
                      <th class="stack" width="285" align="left" valign="top">\
                        <table width="100%" cellpadding="0" cellspacing="0" border="0">\
                          <tr>\
                            <td align="left" valign="top"><a href="' + event["url"] + '" alias="' + event["name"] + '" target="_blank"><img class="width-full" src="' + event["image"] + '" width="285" alt="' + event["name"] + '" style="display: block; border: none; font-family: Arial, Helvetica, sans-serif; font-weight: normal; font-size: 16px; line-height: 20px; color: #000001; mso-line-height-rule: exactly;"></a></td>\
                          </tr>\
                        </table>\
                      </th>\
                      <th class="stack" align="left" valign="top">\
                        <table width="100%" cellpadding="0" cellspacing="0" border="0">\
                          <tr>\
                            <td align="left" valign="top" style="padding: 20px;">\
                              <table width="100%" cellpadding="0" cellspacing="0" border="0">';
  if (! options["suppress_small_badges"]) {
    var badge = event["badge"];
    if (badge != "") {
      html += '\
                                <tr>\
                                  <td align="left" valign="top" style="padding-bottom: 20px; font-family: Arial, Helvetica, sans-serif, Font-Averta-Semibold; font-style: normal; font-weight: 600; font-size: 10px; line-height: 12px; color: #5b955b; mso-line-height-rule: exactly; text-transform: uppercase;">'
                                    + badge +
                                  '</td>\
                                </tr>';
    }
  }
  if (event["artist"] != "") {
    html += '\
                                <tr>\
                                  <td align="left" valign="top" style="font-family: Arial, Helvetica, sans-serif, Font-Averta-Semibold; font-style: normal; font-weight: 600; font-size: 18px; line-height: 23px; color: #262626; mso-line-height-rule: exactly;">'
                                    + event["artist"] +
                                  '</td>\
                                </tr>';
  }
  if (event["name"] != "") {
    html += '\
                                <tr>\
                                  <td align="left" valign="top" style="padding-bottom: 20px; font-family: Arial, Helvetica, sans-serif, Font-Averta-Semibold; font-style: normal; font-weight: 600; font-size: 16px; line-height: 20px; color: #676767; mso-line-height-rule: exactly;">'
                                    + event["name"] +
                                  '</td>\
                                </tr>';
  }
  if (event["venue"] != "") {
    html += '\
                                <tr>\
                                  <td align="left" valign="top" style="font-family: Arial, Helvetica, sans-serif, Font-Averta-Regular; font-style: normal; font-weight: 300; font-size: 16px; line-height: 20px; color: #676767; mso-line-height-rule: exactly;">'
                                    + event["venue"] +
                                  '</td>\
                                </tr>';
  }
  if (!options["suppress_descriptions"] && event["description"] != "") {
    html += '\
                                <tr>\
                                  <td align="left" valign="top" style="padding-top: 20px; font-family: Arial, Helvetica, sans-serif, Font-Averta-Regular; font-style: normal; font-weight: 300; font-size: 16px; line-height: 20px; color: #676767; mso-line-height-rule: exactly;">'
                                    + event["description"] +
                                  '</td>\
                                </tr>';
  }
  if (!options["suppress_dates"] && event["date"] != "") {
    html += '\
                                <tr>\
                                  <td align="left" valign="top" style="padding-top: 20px; font-family: Arial, Helvetica, sans-serif, Font-Averta-Regular; font-style: normal; font-weight: 300; font-size: 14px; line-height: 18px; color: #026CDF; mso-line-height-rule: exactly;">'
                                    + event["date"] +
                                  '</td>\
                                </tr>';
  }
  html += '\
                                <tr>\
                                  <td style="padding-top: 20px;" align="left" valign="top">\
                                    <table class="width-full" cellspacing="0" cellpadding="0" border="0">\
                                      <tr>\
                                        <td style="-webkit-border-radius: 0; -moz-border-radius: 0; border-radius: 0;" bgcolor="#026CDF" align="center">\
                                          <a href="' + event["url"] + '" alias="' + event["name"] + '" target="_blank" style="font-family: Arial, Helvetica, sans-serif, Font-Averta-Semibold; font-weight: 600; font-size: 14px; line-height: 18px; color: #ffffff; text-transform: none; text-decoration: none; padding: 5px 30px; border: 1px solid #026CDF; -webkit-border-radius: 0; -moz-border-radius: 0; border-radius: 0; display: block;">\
                                            See Tickets\
                                          </a>\
                                        </td>\
                                      </tr>\
                                    </table>\
                                  </td>\
                                </tr>\
                              </table>\
                            </td>\
                          </tr>\
                        </table>\
                      </th>\
                    </tr>\
                  </table>\
                </td>\
              </tr>\
            </table>\
          </td>\
        </tr>';
  return html;
}

function generatePreview() {
  var html;

  var sections = preview_data["sections"];

  if (section_num > sections.length) {
    html = '<table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center">No preview data for this section!</td></tr></table>";'
  }
  else {
    var section = sections[section_num - 1];

    var title = options["title"];
    if (title == "") title = section["name"];

    html = '\
      <table width="100%" cellpadding="0" cellspacing="0" border="0">\
        <tr>\
          <td class="pad-20LR" align="left" valign="top" style="padding: 20px 40px;">\
            <table width="100%" cellpadding="0" cellspacing="0" border="0">\
              \
              <tr>\
                <td align="left" valign="top" style="padding: 10px 0; font-family: Arial, Helvetica, sans-serif, Font-Averta-Semibold; font-style: normal; font-weight: 600; font-size: 20px; line-height: 24px; color: #262626; mso-line-height-rule: exactly;">'
                  +title+
                '</td>\
              </tr>';

    var events = section["events"];
    for (var i=0; i<events.length; i++) {
      if (i == 0 && options["first_big"]) html += generateBigCard(events[i]);
      else html += generateSmallCard(events[i]);
    }

    html += '\
            </table>\
          </td>\
        </tr>\
      </table>';
  }

  return html;
}

function generateCode() {
  var amp = '\r\n\
    %%[\r\n\
        SET @Section = ' + section_num + '\r\n\
        SET @Section_Title = "' + htmlEscape(options["title"]) + '"\r\n\
        SET @Section_First_Event_Big = ' + (options["first_big"] ? 1 : 0) + '\r\n\
        SET @Section_Big_Event_Badge = "' + htmlEscape(options["big_badge_text"]) + '"\r\n\
        SET @Section_Supress_Big_Event_Badge = ' + (options["suppress_big_badge"] ? 1 : 0) + '\r\n\
        SET @Section_Supress_Small_Event_Badges = ' + (options["suppress_small_badges"] ? 1 : 0) + '\r\n\
        SET @Section_Supress_Event_Dates = ' + (options["suppress-dates"] ? 1 : 0) + '\r\n\
        SET @Section_Supress_Event_Descriptions = ' + (options["suppress_descriptions"] ? 1 : 0) + '\r\n\
    ]%%\r\n\
    %%[\r\n\
        IF Empty(@Section_Title) THEN SET @Section_Title = Field(Row(@Section_Titles, @Section), "Value") ENDIF\r\n\
        IF Empty(@Section_Supress_Event_Dates) THEN SET @Section_Supress_Event_Dates = @Global_Supress_Event_Dates ENDIF\r\n\
        IF Empty(@Section_Supress_Event_Descriptions) THEN SET @Section_Supress_Event_Descriptions = @Global_Supress_Event_Descriptions ENDIF\r\n\
        \r\n\
        SET @Section_Event_Data = Concat("<root>", Field(Row(@Section_Events, @Section), "Xml"), "</root>")\r\n\
        \r\n\
        SET @Event_Names = BuildRowsetFromXML(@Section_Event_Data, "//event/name", 1)\r\n\
        SET @Num_Events = RowCount(@Event_Names)\r\n\
        \r\n\
        IF @Num_Events > 0 THEN\r\n\
          SET @Event_Badges = BuildRowsetFromXML(@Section_Event_Data, "//event/badge", 1)\r\n\
          SET @Event_Artists = BuildRowsetFromXML(@Section_Event_Data, "//event/artist", 1)\r\n\
          SET @Event_Descriptions = BuildRowsetFromXML(@Section_Event_Data, "//event/description", 1)\r\n\
          SET @Event_Venues = BuildRowsetFromXML(@Section_Event_Data, "//event/venue", 1)\r\n\
          SET @Event_Dates = BuildRowsetFromXML(@Section_Event_Data, "//event/date", 1)\r\n\
          SET @Event_Images = BuildRowsetFromXML(@Section_Event_Data, "//event/image", 1)\r\n\
          SET @Event_URLs = BuildRowsetFromXML(@Section_Event_Data, "//event/url", 1)\r\n\
          \r\n\
          IF @Num_Events < 1 THEN RaiseError(Concat("No events in section ", @Section, " data"), true) ENDIF\r\n\
          IF @Num_Events != RowCount(@Event_Badges)\r\n\
          OR @Num_Events != RowCount(@Event_Artists)\r\n\
          OR @Num_Events != RowCount(@Event_Descriptions)\r\n\
          OR @Num_Events != RowCount(@Event_Venues)\r\n\
          OR @Num_Events != RowCount(@Event_Dates)\r\n\
          OR @Num_Events != RowCount(@Event_Images)\r\n\
          OR @Num_Events != RowCount(@Event_URLs)\r\n\
          THEN \r\n\
            RaiseError(Concat("Event data for section ", @Section, " not symmetric"), true) \r\n\
          ENDIF\r\n\
          \r\n\
    ]%%\r\n\
        \r\n\
        <table width="100%" cellpadding="0" cellspacing="0" border="0">\r\n\
          <tr>\r\n\
            <td class="pad-20LR" align="left" valign="top" style="padding: 20px 40px;">\r\n\
              \r\n\
              <table width="100%" cellpadding="0" cellspacing="0" border="0">\r\n\
                <tr>\r\n\
                  <td align="left" valign="top" style="padding: 10px 0; font-family: Arial, Helvetica, sans-serif, Font-Averta-Semibold; font-style: normal; font-weight: 600; font-size: 20px; line-height: 24px; color: #262626; mso-line-height-rule: exactly;">\r\n\
                    %%=v(@Section_Title)=%%\r\n\
                  </td>\r\n\
                </tr>\r\n\
                \r\n\
    %%[\r\n\
          FOR @e = 1 TO @Num_Events DO\r\n\
            SET @Event_Badge = Field(Row(@Event_Badges, @e), "Value")\r\n\
            SET @Event_Name = Field(Row(@Event_Names, @e), "Value")\r\n\
            SET @Event_Artist = Field(Row(@Event_Artists, @e), "Value")\r\n\
            SET @Event_Description = Field(Row(@Event_Descriptions, @e), "Value")\r\n\
            SET @Event_Venue = Field(Row(@Event_Venues, @e), "Value")\r\n\
            SET @Event_Date = Field(Row(@Event_Dates, @e), "Value")\r\n\
            SET @Event_Image = Field(Row(@Event_Images, @e), "Value")\r\n\
            SET @Event_URL = Field(Row(@Event_URLs, @e), "Value")\r\n\
            \r\n\
            IF @e == 1 AND @Section_First_Event_Big THEN\r\n\
              IF NOT Empty(@Section_Big_Event_Badge) THEN SET @Event_Badge = @Section_Big_Event_Badge ENDIF\r\n\
    ]%%\r\n\
                <tr>\r\n\
                  <td align="left" valign="top" style="padding: 10px 0;">\r\n\
                    <table width="100%" cellpadding="0" cellspacing="0" border="0">\r\n\
                      <tr>\r\n\
                        <td align="left" valign="top" style="border: 1px solid #e0e0e0;">\r\n\
                          <table width="100%" cellpadding="0" cellspacing="0" border="0">\r\n\
                            <tr>\r\n\
                              <td align="left" valign="top">\r\n\
                                <table width="100%" cellpadding="0" cellspacing="0" border="0">\r\n\
                                  <tr>\r\n\
                                    <td align="left" valign="top"><a href="%%=RedirectTo(@Event_URL)=%%" alias="%%=v(@Event_Name)=%%" target="_blank"><img class="width-full" src="%%=v(@Event_Image)=%%" width="568" alt="%%=v(@Event_Name)=%%" style="display: block; border: none; font-family: Arial, Helvetica, sans-serif; font-weight: normal; font-size: 16px; line-height: 20px; color: #000001; mso-line-height-rule: exactly;"></a></td>\r\n\
                                  </tr>\r\n\
                                </table>\r\n\
                              </td>\r\n\
                            </tr>\r\n\
                            <tr>\r\n\
                              <td align="left" valign="top">\r\n\
                                <table width="100%" cellpadding="0" cellspacing="0" border="0">\r\n\
                                  <tr>\r\n\
                                    <td align="left" valign="top" style="padding: 20px;">\r\n\
                                      <table width="100%" cellpadding="0" cellspacing="0" border="0">\r\n\
    %%[       IF NOT (@Section_Supress_Big_Event_Badge OR Empty(@Event_Badge)) THEN ]%%\r\n\
                                        <tr>\r\n\
                                          <td align="left" valign="top" style="padding-bottom: 20px; font-family: Arial, Helvetica, sans-serif, Font-Averta-Semibold; font-style: normal; font-weight: 600; font-size: 10px; line-height: 12px; color: #5b955b; mso-line-height-rule: exactly; text-transform: uppercase;">\r\n\
                                            %%=v(@Event_Badge)=%%\r\n\
                                          </td>\r\n\
                                        </tr>\r\n\
    %%[       ENDIF ]%%\r\n\
    %%[       IF NOT Empty(@Event_Artist) THEN ]%%\r\n\
                                         <tr>\r\n\
                                          <td align="left" valign="top" style="font-family: Arial, Helvetica, sans-serif, Font-Averta-Semibold; font-style: normal; font-weight: 600; font-size: 18px; line-height: 23px; color: #262626; mso-line-height-rule: exactly;">\r\n\
                                            %%=v(@Event_Artist)=%%\r\n\
                                          </td>\r\n\
                                        </tr>\r\n\
    %%[       ENDIF ]%%\r\n\
    %%[       IF NOT Empty(@Event_Name) THEN ]%%\r\n\
                                        <tr>\r\n\
                                          <td align="left" valign="top" style="padding-bottom: 20px; font-family: Arial, Helvetica, sans-serif, Font-Averta-Semibold; font-style: normal; font-weight: 600; font-size: 16px; line-height: 20px; color: #676767; mso-line-height-rule: exactly;">\r\n\
                                            %%=v(@Event_Name)=%%\r\n\
                                          </td>\r\n\
                                        </tr>\r\n\
    %%[       ENDIF ]%%\r\n\
    %%[       IF NOT Empty(@Event_Venue) THEN ]%%\r\n\
                                        <tr>\r\n\
                                          <td align="left" valign="top" style="font-family: Arial, Helvetica, sans-serif, Font-Averta-Regular; font-style: normal; font-weight: 300; font-size: 16px; line-height: 20px; color: #676767; mso-line-height-rule: exactly;">\r\n\
                                            %%=v(@Event_Venue)=%%\r\n\
                                          </td>\r\n\
                                        </tr>\r\n\
    %%[       ENDIF ]%%\r\n\
    %%[       IF NOT (Empty(@Event_Description) OR @Section_Supress_Event_Descriptions) THEN ]%%\r\n\
                                        <tr>\r\n\
                                          <td align="left" valign="top" style="padding-top: 20px; font-family: Arial, Helvetica, sans-serif, Font-Averta-Regular; font-style: normal; font-weight: 300; font-size: 16px; line-height: 20px; color: #676767; mso-line-height-rule: exactly;">\r\n\
                                            %%=v(@Event_Description)=%%\r\n\
                                          </td>\r\n\
                                        </tr>\r\n\
    %%[       ENDIF ]%%\r\n\
    %%[       IF NOT (Empty(@Event_Date) OR @Section_Supress_Event_Dates) THEN ]%%\r\n\
                                        <tr>\r\n\
                                          <td align="left" valign="top" style="padding-top: 20px; font-family: Arial, Helvetica, sans-serif, Font-Averta-Regular; font-style: normal; font-weight: 300; font-size: 14px; line-height: 18px; color: #026CDF; mso-line-height-rule: exactly;">\r\n\
                                            %%=v(@Event_Date)=%%\r\n\
                                          </td>\r\n\
                                        </tr>\r\n\
    %%[       ENDIF ]%%\r\n\
                                        <tr>\r\n\
                                          <td style="padding-top: 20px;" align="left" valign="top">\r\n\
                                            <table class="width-full" cellspacing="0" cellpadding="0" border="0">\r\n\
                                              <tr>\r\n\
                                                <td style="-webkit-border-radius: 0; -moz-border-radius: 0; border-radius: 0;" bgcolor="#026CDF" align="center">\r\n\
                                                  <a href="%%=RedirectTo(@Event_URL)=%%" alias="%%=v(@Event_Name)=%%" target="_blank" style="font-family: Arial, Helvetica, sans-serif, Font-Averta-Semibold; font-weight: 600; font-size: 14px; line-height: 18px; color: #ffffff; text-transform: none; text-decoration: none; padding: 5px 30px; border: 1px solid #026CDF; -webkit-border-radius: 0; -moz-border-radius: 0; border-radius: 0; display: block;">\r\n\
                                                    <!--[if mso]>&nbsp;&nbsp;&nbsp;<![endif]-->See Tickets<!--[if mso]>&nbsp;&nbsp;&nbsp;<![endif]-->\r\n\
                                                  </a>\r\n\
                                                </td>\r\n\
                                              </tr>\r\n\
                                            </table>\r\n\
                                          </td>\r\n\
                                        </tr>\r\n\
                                      </table>\r\n\
                                    </td>\r\n\
                                  </tr>\r\n\
                                </table>\r\n\
                              </td>\r\n\
                            </tr>\r\n\
                          </table>\r\n\
                        </td>\r\n\
                      </tr>\r\n\
                    </table>\r\n\
                  </td>\r\n\
                </tr>\r\n\
                \r\n\
    %%[\r\n\
            ELSE\r\n\
    ]%%\r\n\
                \r\n\
                <tr>\r\n\
                  <td align="left" valign="top" style="padding: 10px 0;">\r\n\
                    <table width="100%" cellpadding="0" cellspacing="0" border="0">\r\n\
                      <tr>\r\n\
                        <td align="left" valign="top" style="border: 1px solid #e0e0e0;">\r\n\
                          <table width="100%" cellpadding="0" cellspacing="0" border="0">\r\n\
                            <tr>\r\n\
                              <th class="stack" width="285" align="left" valign="top">\r\n\
                                <table width="100%" cellpadding="0" cellspacing="0" border="0">\r\n\
                                  <tr>\r\n\
                                    <td align="left" valign="top"><a href="%%=RedirectTo(@Event_URL)=%%" alias="%%=v(@Event_Name)=%%" target="_blank"><img class="width-full" src="%%=v(@Event_Image)=%%" width="285" alt="%%=v(@Event_Name)=%%" style="display: block; border: none; font-family: Arial, Helvetica, sans-serif; font-weight: normal; font-size: 16px; line-height: 20px; color: #000001; mso-line-height-rule: exactly;"></a></td>\r\n\
                                  </tr>\r\n\
                                </table>\r\n\
                              </th>\r\n\
                              <th class="stack" align="left" valign="top">\r\n\
                                <table width="100%" cellpadding="0" cellspacing="0" border="0">\r\n\
                                  <tr>\r\n\
                                    <td align="left" valign="top" style="padding: 20px;">\r\n\
                                      <table width="100%" cellpadding="0" cellspacing="0" border="0">\r\n\
    %%[       IF NOT (@Section_Supress_Small_Event_Badges OR Empty(@Event_Badge)) THEN ]%%\r\n\
                                        <tr>\r\n\
                                          <td align="left" valign="top" style="padding-bottom: 20px; font-family: Arial, Helvetica, sans-serif, Font-Averta-Semibold; font-style: normal; font-weight: 600; font-size: 10px; line-height: 12px; color: #5b955b; mso-line-height-rule: exactly; text-transform: uppercase;">\r\n\
                                            %%=v(@Event_Badge)=%%\r\n\
                                          </td>\r\n\
                                        </tr>\r\n\
    %%[       ENDIF ]%%\r\n\
    %%[       IF NOT Empty(@Event_Artist) THEN ]%%\r\n\
                                        <tr>\r\n\
                                          <td align="left" valign="top" style="font-family: Arial, Helvetica, sans-serif, Font-Averta-Semibold; font-style: normal; font-weight: 600; font-size: 18px; line-height: 23px; color: #262626; mso-line-height-rule: exactly;">\r\n\
                                            %%=v(@Event_Artist)=%%\r\n\
                                          </td>\r\n\
                                        </tr>\r\n\
    %%[       ENDIF ]%%\r\n\
    %%[       IF NOT Empty(@Event_Name) THEN ]%%\r\n\
                                        <tr>\r\n\
                                          <td align="left" valign="top" style="padding-bottom: 20px; font-family: Arial, Helvetica, sans-serif, Font-Averta-Semibold; font-style: normal; font-weight: 600; font-size: 16px; line-height: 20px; color: #676767; mso-line-height-rule: exactly;">\r\n\
                                            %%=v(@Event_Name)=%%\r\n\
                                          </td>\r\n\
                                        </tr>\r\n\
    %%[       ENDIF ]%%\r\n\
    %%[       IF NOT Empty(@Event_Venue) THEN ]%%\r\n\
                                        <tr>\r\n\
                                          <td align="left" valign="top" style="font-family: Arial, Helvetica, sans-serif, Font-Averta-Regular; font-style: normal; font-weight: 300; font-size: 16px; line-height: 20px; color: #676767; mso-line-height-rule: exactly;">\r\n\
                                            %%=v(@Event_Venue)=%%\r\n\
                                          </td>\r\n\
                                        </tr>\r\n\
    %%[       ENDIF ]%%\r\n\
    %%[       IF NOT (Empty(@Event_Description) OR @Section_Supress_Event_Descriptions) THEN ]%%\r\n\
                                        <tr>\r\n\
                                          <td align="left" valign="top" style="padding-top: 20px; font-family: Arial, Helvetica, sans-serif, Font-Averta-Regular; font-style: normal; font-weight: 300; font-size: 16px; line-height: 20px; color: #676767; mso-line-height-rule: exactly;">\r\n\
                                            %%=v(@Event_Description)=%%\r\n\
                                          </td>\r\n\
                                        </tr>\r\n\
    %%[       ENDIF ]%%\r\n\
    %%[       IF NOT (Empty(@Event_Date) OR @Section_Supress_Event_Dates) THEN ]%%\r\n\
                                        <tr>\r\n\
                                          <td align="left" valign="top" style="padding-top: 20px; font-family: Arial, Helvetica, sans-serif, Font-Averta-Regular; font-style: normal; font-weight: 300; font-size: 14px; line-height: 18px; color: #026CDF; mso-line-height-rule: exactly;">\r\n\
                                            %%=v(@Event_Date)=%%\r\n\
                                          </td>\r\n\
                                        </tr>\r\n\
    %%[       ENDIF ]%%\r\n\
                                        <tr>\r\n\
                                          <td style="padding-top: 20px;" align="left" valign="top">\r\n\
                                            <table class="width-full" cellspacing="0" cellpadding="0" border="0">\r\n\
                                              <tr>\r\n\
                                                <td style="-webkit-border-radius: 0; -moz-border-radius: 0; border-radius: 0;" bgcolor="#026CDF" align="center">\r\n\
                                                  <a href="%%=RedirectTo(@Event_URL)=%%" alias="%%=v(@Event_Name)=%%" target="_blank" style="font-family: Arial, Helvetica, sans-serif, Font-Averta-Semibold; font-weight: 600; font-size: 14px; line-height: 18px; color: #ffffff; text-transform: none; text-decoration: none; padding: 5px 30px; border: 1px solid #026CDF; -webkit-border-radius: 0; -moz-border-radius: 0; border-radius: 0; display: block;">\r\n\
                                                    <!--[if mso]>&nbsp;&nbsp;&nbsp;<![endif]-->See Tickets<!--[if mso]>&nbsp;&nbsp;&nbsp;<![endif]-->\r\n\
                                                  </a>\r\n\
                                                </td>\r\n\
                                              </tr>\r\n\
                                            </table>\r\n\
                                          </td>\r\n\
                                        </tr>\r\n\
                                      </table>\r\n\
                                    </td>\r\n\
                                  </tr>\r\n\
                                </table>\r\n\
                              </th>\r\n\
                            </tr>\r\n\
                          </table>\r\n\
                        </td>\r\n\
                      </tr>\r\n\
                    </table>\r\n\
                  </td>\r\n\
                </tr>\r\n\
                \r\n\
    %%[\r\n\
            ENDIF\r\n\
          NEXT @e\r\n\
    ]%%\r\n\
              \r\n\
              </table>\r\n\
              \r\n\
            </td>\r\n\
          </tr>\r\n\
        </table>\r\n\
        \r\n\
    %%[\r\n\
        ENDIF\r\n\
    ]%%';

  return amp;
}

// build the content and update the data  -- call after changes are made to inputs
function updateContent() {
  sdk.setSuperContent(generatePreview());
  sdk.setContent(generateCode());
  sdk.setData({'section_num': section_num, 'options': options});
}

// main getData function -- gets stored state data for the content block
sdk.getData(function (data) {
  // read data
  section_num = data['section_num'];
  options = data['options'];

  // set defaults for previously undefined data
  if (typeof section_num == 'undefined') section_num = 1;
  if (typeof options == 'undefined') options = {
    'title': "",
    'first_big': true,
    'big_badge_text': "",
    'suppress_big_badge': false,
    'suppress_small_badges': true,
    'suppress_dates': false,
    'suppress_descriptions': false
  };

  // initialize the slider
  $("#section-num").val(section_num);
  $("#section-num-val").html(section_num);

  // initialize option inputs
  $("#title").val(options['title']);
  $("#first-big").val(options['first_big'] ? "yes" : "no");
  $("#big-badge-text").val(options['big_badge_text']);
  $("#suppress-big-badge").val(options['suppress_big_badge'] ? "yes" : "no");
  $("#suppress-small-badges").val(options['suppress_small_badges'] ? "yes" : "no");
  $("#suppress-dates").val(options['suppress_dates'] ? "yes" : "no");
  $("#suppress-descriptions").val(options['suppress_descriptions'] ? "yes" : "no");

  // add callback for when the slider changes
  $("#section-num").mousemove(function() {
    var n = $(this).val();
    if (n != section_num) {
      section_num = n;
      $('#section-num-val').html(section_num);
      updateContent();
    }
  });

  // add callbacks for when the option inputs change
  $("#title").change(function() {
    options['title'] = $(this).val();
    updateContent();
  });

  $("#first-big").change(function() {
    options['first_big'] = $(this).val() == "yes" ? true : false;
    updateContent();
  });

  $("#big-badge-text").change(function() {
    options['big_badge_text'] = $(this).val();
    updateContent();
  });

  $("#suppress-big-badge").change(function() {
    options['suppress_big_badge'] = $(this).val() == "yes" ? true : false;
    updateContent();
  });

  $("#suppress-small-badges").change(function() {
    options['suppress_small_badges'] = $(this).val() == "yes" ? true : false;
    updateContent();
  });

  $("#suppress-dates").change(function() {
    options['suppress_dates'] = $(this).val() == "yes" ? true : false;
    updateContent();
  });

  $("#suppress-descriptions").change(function() {
    options['suppress_descriptions'] = $(this).val() == "yes" ? true : false;
    updateContent();
  });

  updateContent();
});
