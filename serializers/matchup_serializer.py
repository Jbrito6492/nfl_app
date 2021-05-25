class MatchupSerializer:
    @staticmethod
    def parse_team(team):
        team_abbr = team.split(' ')[-1]
        team_name = team.split('team_abbr')[0]
        return (team_abbr, team_name)
    
    @staticmethod
    def parse_location(location):
        parsed_location = location.split(', ')
        stadium = parsed_location[0]
        city = parsed_location[1]
        return (stadium, city)
