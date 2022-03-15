<View key={item.key}  style={[styles.card]}>
            <ContestCard
                contest_key={item.key}
                match_key={item.match_key}
                title={item.title}
                filled_spots={item.filled_spots}
                total_spots={item.total_spots}
                occupaid_cent={item.occupaid_cent}
                entry={item.entry}
                amount_letters={item.prize.amount_letters}
                amount={item.prize.amount}
                guaranteed={item.guaranteed === 'yes'}
                max_entry={item.max_entry}
                bonus={item.bonus}
                is_practice={false}
                contest_type={item.contest_type}
                proceedToJoin={()=>{}} 
                onContestCardPress={()=>{}}       
                   />
          </View>