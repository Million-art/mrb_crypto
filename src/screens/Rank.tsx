import rank from "./@assets/rank.png"

const Rank = () => {
  return (
    <section>
        <div className="flex">
          <div>
              <h1>Rank</h1>
              <p>Complete Tasks and Earn Reward</p>
          </div>
          <div>
              <img src={rank} alt="Rank" />
          </div>
        </div>
    </section>
  )
}

export default Rank