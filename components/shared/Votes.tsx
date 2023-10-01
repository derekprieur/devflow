import React from "react";

interface VotesProps {
  type: string;
  itemId: string;
  userId: string;
  upvotes: number;
  hasupVoted: boolean;
  downvotes: number;
  hasdownVoted: boolean;
  hasSaved: boolean;
}

const Votes = ({
  downvotes,
  hasSaved,
  hasdownVoted,
  hasupVoted,
  itemId,
  type,
  upvotes,
  userId,
}: VotesProps) => {
  return <div>Votes</div>;
};

export default Votes;
