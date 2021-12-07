Feature: Set view and edit restrictions on a page

Scenario Outline: To change page restrictions as per user requirement.
  Given the user is on conflunece page
  When the user change restrictions for the page - Index <Index>
  Then the user should see correct restriction applied - ExpectedRestriction <ExpectedRestriction>
  Examples:
  | Index  | ExpectedRestriction                    |
  |   1    | Anyone can view and edit               |
  |   2    | Anyone can view, only some can edit    |
  |   3    | Only specific people can view or edit  |
