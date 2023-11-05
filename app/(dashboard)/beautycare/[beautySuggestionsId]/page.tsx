import React from "react";
import BeautySuggestions from "./_components/BeautySuggestions/BeautySuggestions";

export default function BeautySuggestionsPage({
  params,
}: {
  params: { beautySuggestionsId: string };
}) {
  const beautySuggestionsId = params.beautySuggestionsId;
  return <BeautySuggestions data={{}} />;
}
