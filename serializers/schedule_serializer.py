from .matchup_serializer import MatchupSerializer


class ScheduleSerializer:
    def __init__(self, one_week_schedule):
        self.one_week_schedule = one_week_schedule

    def parse_matchup(self, matchup):
        return {
            'away_team': MatchupSerializer.parse_team(matchup[0])[0],
            'home_team': MatchupSerializer.parse_team(matchup[1])[0],
            'date_time': matchup[2],
            'location': MatchupSerializer.parse_location(matchup[3])[1],
            'stadium': MatchupSerializer.parse_location(matchup[3])[0]
        }

    def serialize(self):
        one_week_matchups_parsed = []
        for matchup in self.one_week_schedule:
            one_week_matchups_parsed.append(self.parse_matchup(matchup))
        return one_week_matchups_parsed
