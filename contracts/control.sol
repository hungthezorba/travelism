pragma solidity ^0.5.11;

contract DZToken {
    string  public name = "INFT Token";
    string  public symbol = "INFT";
    string  public standard = "INFT Token v1.0";
    uint8   public decimals = 6;
    uint256 public totalSupply = 1000;
    
    address owner;

    event Issued(
        address indexed _to,
        uint256 _value
    );

    event Transfer(
        address indexed _from,
        address indexed _to,
        uint256 _value
    );

    event Approval(
        address indexed _owner,
        address indexed _spender,
        uint256 _value
    );
    
    event WriteReview(
        address indexed _from    
    );

    mapping(address => uint256) public balanceOf;
    mapping(address => mapping(address => uint256)) public allowance;
    
    struct Merchant {
        string name;
        uint256 point;
    }
    
    Merchant[] public merchants;
    
    mapping (address => Merchant) public merchantStruct;
    address[] public userAddresses;
    
    function addMerchandis(string memory name, uint256 point) public returns (bool success) {
        require(msg.sender == owner, "only authority can do this");
        merchants.push(Merchant(name, point));
        return true;
    }
    

    constructor() public {
        balanceOf[msg.sender] = totalSupply;
    }

    
    function writeReview() public returns (bool success) {
        balanceOf[msg.sender] += 1000;
        emit WriteReview(msg.sender);
        return true;
    }
    
    
}
