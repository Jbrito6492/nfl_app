class ScheduleSerializer:
    def __init__(self, one_week_schedule):
        self.one_week_schedule = one_week_schedule

    def parse_matchup(self, matchup):
        return {
            'away_team': matchup[0],
            'home_team': matchup[1],
            'date_time': matchup[2],
            'stadium': matchup[3],
            'location': matchup[4]
        }

    def serialize(self):
        one_week_matchups_parsed = []
        for matchup in self.one_week_schedule:
            one_week_matchups_parsed.append(self.parse_matchup(matchup))
        return one_week_matchups_parsed
