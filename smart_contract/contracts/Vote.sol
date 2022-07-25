// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract Vote {
    // Model a Candidate
    struct Candidate {
        uint256 id;
        string name;
        uint256 voteCount;
    }

    struct voter {
        string voterName;
        bool voted;
    }

    // Store Candidates
    // Fetch Candidate
    mapping(uint256 => Candidate) public candidates;

    // mapping(uint256 => vote) private votes;
    mapping(address => voter) public voterRegister;

    // Store Candidates Count
    uint256 public candidatesCount;
    // Official address of Ballot
    address public ballotOfficialAddress;
    // Count of Voters and votes
    uint256 public totalVoter = 0;
    uint256 public totalVote = 0;
    uint256 winner = 0;

    // voted event
    event votedEvent(uint256 indexed _candidateId);

    //states
    enum State {
        Created,
        Voting,
        Ended
    }
    State public state;

    //modifiers

    modifier onlyOfficial() {
        require(msg.sender == ballotOfficialAddress);
        _;
    }

    modifier inState(State _state) {
        require(state == _state);
        _;
    }

    //functions

    constructor() {
        ballotOfficialAddress = msg.sender;
        state = State.Created;
    }

    function addCandidate(string memory _name)
        public
        onlyOfficial
        inState(State.Created)
    {
        candidatesCount++;
        candidates[candidatesCount] = Candidate(candidatesCount, _name, 0);
    }

    function addVoter(address _voterAddress, string memory _voterName)
        public
        inState(State.Created)
        onlyOfficial
    {
        voter memory v;
        v.voterName = _voterName;
        v.voted = false;
        voterRegister[_voterAddress] = v;
        totalVoter++;
    }

    function startVote() public inState(State.Created) onlyOfficial {
        state = State.Voting;
    }

    function doVote(uint256 _candidateId) public inState(State.Voting) {
        if (
            bytes(voterRegister[msg.sender].voterName).length != 0 &&
            !voterRegister[msg.sender].voted
        ) {
            voterRegister[msg.sender].voted = true;
            totalVote++;
            candidates[_candidateId].voteCount++;
            emit votedEvent(_candidateId);
        } else {
            revert("Not eligible to vote.");
        }
    }

    function endVote() public inState(State.Voting) onlyOfficial {
        state = State.Ended;
    }

    function result(uint256 _candidateId)
        public
        view
        inState(State.Ended)
        returns (uint256 voteCount)
    {
        return candidates[_candidateId].voteCount;
    }

    function findWinner() public inState(State.Ended) {
        for (uint256 i = 1; i < candidatesCount + 1; i++) {
            if (candidates[i].voteCount > candidates[winner].voteCount) {
                winner = i;
            }
        }
    }

    function publishResult()
        public
        view
        returns (string memory nameOfWinner, uint256 voteCount)
    {
        return (candidates[winner].name, candidates[winner].voteCount);
    }
}
