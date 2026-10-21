---
title: Game Theory of Cooperation 101
description: Exploring the intricacies of cooperation with an introduction to the Prisoner's Dilemma and the Tit-for-tat strategy.
date: 2026-10-21
permalink: /blog/game-theory-of-cooperation-101/
substackLink: https://thewishfulskeptic.substack.com/p/game-theory-of-cooperation-101
related:
- 2024-06_perks-of-tolerance
- 2023-07_empathy-bottleneck
- 2024-07_epistemic-barter
---

I would like to see a world where humans coexist harmoniously with one another regardless of their differences. As such, I have promoted an optimistic and lenient approach to social interactions in several of my posts. That being said, I also value lucidity; self-delusion isn't an effective means to achieve goals. And as it turns out, harmonious coexistence can be pretty tricky to navigate in practice.

In order to figure out a robust, sensible, and sustainable strategy to foster cooperation, we cannot solely rely on idealism. We need to be aware of potential pitfalls and account for them. To that end, it is helpful to know about the Prisoner's Dilemma and Tit-for-tat which are two concepts from game theory, the field of study focused on determining the optimal strategies for any given game based on applied mathematics.

If you're already familiar with them, this post might not be of great interest to you, except perhaps as a refresher. However, I didn't feel comfortable assuming every single potential reader was already acquainted with them. So I decided to write this short, self-contained primer as a fallback.

## The Prisoner's Dilemma

The Prisoner's Dilemma is a staple thought experiment when it comes to game theory and the strategical analysis of cooperation. It goes as follows:

> Two members of a criminal gang are arrested and imprisoned. Each prisoner is in solitary confinement with no means of speaking to or exchanging messages with the other.
>
> The police admit they don't have enough evidence to convict the pair on the principal charge. They plan to sentence both to a year in prison on a lesser charge. Simultaneously, the police offer each prisoner a Faustian bargain. If he testifies against his partner, he will go free while the partner will get three years in prison on the main charge. Oh, yes, there is a catch ... If _both_ prisoners testify against each other, both will be sentenced to two years in jail.
>
> The prisoners are given a little time to think this over, but in no case may either learn what the other has decided until he has irrevocably made his decision. Each is informed that the other prisoner is being offered the very same deal. Each prisoner is concerned only with his own welfare—with minimizing his own prison sentence.
>
> – William Poundstone, _Prisoner's Dilemma_ (1993)

The standard vocabulary used to represent the two options available in a Prisoner's Dilemma type of situation is "**cooperation"** and "**defection"**. In this case, staying silent is cooperating, and snitching is defecting.

With that in mind, and to sum up, there are three types of outcomes to the dilemma:

- **Mutual cooperation**, i.e. both prisoners keep their mouths shut. They both get sentenced to one year in prison. This is the second best potential outcome for both.
- **One-sided defection**, i.e. a single prisoner rats the other one out. This is the best potential outcome for the tattler, who goes free, and the worst for the patsy, who gets rewarded for his loyalty with three long years in jail.
- **Mutual defection**, i.e. both prisoners snitch on the other. This is the second worst potential outcome for both, with two years of prison each.

In an ideal world, the fairest outcome is mutual cooperation since it ensures the shortest prison time per capita. However, the payoff for being the only selfish turncoat is terrific, whilst the punishment for being the sole optimistic stalwart is steep. So the safest option is to defect, since it gives you a shot at getting the absolute best personal outcome and protects you from getting the absolute worst. And yet, if both prisoners exercise callous pragmatism, they end up with a worse outcome^[two years of prison instead of one] than if they both had been starry-eyed altruistic chumps. Thus lies the vexing dilemma.

This thought experiment serves as a good abstraction for the frequent conundrums that arise from coexisting with others and having to navigate competing interests. As the [Wikipedia article](https://en.wikipedia.org/wiki/Prisoner's_dilemma) puts it:

> In casual usage, the label "Prisoner's Dilemma" is applied to any situation in which two entities can gain important benefits by cooperating or suffer by failing to do so, but find it difficult or expensive to coordinate their choices.

Should you trust and cooperate at the risk of being taken advantage of? Should you defect, whether it stems from the defensive intent of cutting potential losses or from an aggressive and selfish bid to maximize personal gains? Determining the best move without glossing over the risks, benefits, and morality behind every potential choice is a delicate balancing act.

When this dilemma is applied more broadly to societies, it can lead to depressing cynicism. As the number of players involved in a "game" grows, it becomes increasingly likely, if not inevitable, that at least a few will turn to treachery for easy profits. Regrettably, benevolence can be very dangerous when you're interacting in an environment that isn't free from exploiters. Thus, it can take only a few "rotten apples" to spoil the bunch and prompt even "nice" players to become ruthless in order to ensure their survival.

This vicious cycle can spiral into a race to the bottom where every player must keep becoming the best at being the worst to retain their competitive edge or risk eradication. The [dark forest hypothesis](https://en.wikipedia.org/wiki/Dark_forest_hypothesis)^[Spoiler for the novel of the same name by Liu Cixin (which is worth a read).] is a striking example of such a bleak scenario. Scott Alexander seems to consider [this dynamic](https://slatestarcodex.com/2014/07/30/meditations-on-moloch/) to be the main source of evil and dysfunctionality in the world (assuming I understand him correctly).

So what does this mean for cooperation? Before we can answer this question, we have to inject a bit more nuance and complexity into our scenario. In the default thought experiment, the "game" happens in a vacuum under the assumption that there will be no opportunity for retaliation or rewards outside the immediate confines of this single decision.

However, in real life, there are consequences across time for the decisions you make.  People remember your past actions and they will answer in kind if they ever interact with you again. They can also set up compensation and punishment structures to counterbalance one-off game incentives and encourage loyalty. Snitches get stitches (and end up in ditches) and all that.

So what would a better abstraction look like, and what can we learn from it in terms of optimal strategies? As it turns out, this question has undergone thorough research, and fortunately there are answers.

## Tit-for-tat

Real-life cooperation strategies can be modelled more faithfully through iterated Prisoner's Dilemma rounds. Think of it like a series of games of rock-paper-scissors. The players privately make their choice, which both get revealed at the same time, and score points according to the combined result. They have access to the full history of past turns thus far and can use it as part of the deliberation process for their next move.

The goal is to earn the most points by the end of an arbitrary number of rounds (e.g. 200). The amount of points rewarded reflects the Prisoner's Dilemma setup:

- getting one-sidedly betrayed reaps the worst payoff (e.g. 0),
- mutual defection yields a slightly better but still meager return (e.g. 1),
- mutual cooperation results in decent proceeds for both (e.g. 3),
- and lastly, being the one-sided greedy snake grants the greatest score (e.g. 5).

Robert Axerold ran this experiment in 1980 by pitting several strategies against each other (including themselves) in a round-robin tournament run by a computer simulation. The competition received submissions from a diverse crowd, including experts, professionals, and amateurs from various fields such as psychology, economics, political science, math, and sociology. The goal, as you probably figured out, was to determine which one would rack in the most points across all games.

There was a first tournament with 15 competing strategies. It was followed by a second one featuring 63 contenders designed in light of the analysis of the first one's results. Both of these served as the basis for his renowned 1984 book _The Evolution of Cooperation_.

The same unassuming algorithm, dubbed Tit-for-tat, won both tournaments. It's a straightforward strategy. It cooperates on the first turn, and from then on replicates whatever action the other player did on their last turn (i.e. if they cooperated it cooperates, if they defected it defects). Another way to think of it is that Tit-for-tat always cooperates by default, but defects once after each defection from the other player.

What explains its success? The analysis of the tournaments' results identified a few key factors of high performing strategies. Tit for that incorporates every one of them. It is:
- A "**nice**" strategy. It starts with cooperation and never defects first. That means at best it'll only score as much as its current partner, or less. And yet, at scale, based on interactions with multiple players, nice strategies end up outperforming their counterparts by offsetting the loss incurred from exploiters with the bountiful long term returns of mutual collaborators.
- "**Forgiving**". It only keeps a one-turn memory. If you backstabbed it last turn it'll punch you in the face once, for good measure, then let bygones be bygones as long as you don't do it again. You can learn your lesson and go back to cooperating from then on, rather then get stuck in a never-ending vendetta cycle.
- "**Provocable**". Forgiveness is nice and all, but if you never fight back against exploitation you're just a patsy. The unscrupulous other players will see they can repeatedly rip you off without repercussions and do just that. Retaliation is a powerful deterrence [conditioning](https://en.wikipedia.org/wiki/Operant_conditioning) tactic. There's less temptation to defect when your only two choices are mutual prosperity or mutually assured destruction.
- **Not jelly**. Tit-for-tat doesn't burden itself with trying to outshine the other player and only humbly focuses on maximizing its own profits. It has spiritually transcended petty ego-based comparisons. Consequently, it eschews being cute with devious one-up ploys and avoids the recessions caused by common downward spirals of retaliation.
- **Extremely simple and predictable**. It's tempting to surmise that the ultimate strategy probably involves some intricate 4D chess. However, the data seems to invalidate that assumption. Anyone can understand Tit-for-tat without a shadow of ambiguity. It quickly becomes cristal clear that it indiscriminately reciprocates your approach, be it backscratching or ass-whooping. So the optimal way to contend with it even dawns upon the most primitive organisms: either don't engage or cooperate, defection will spell trouble for everyone involved.

That being said, the environment and rules of engagement will always have a massive influence on what strategy ends up being the most optimal. Tit-for-tat happens to be very good in most circumstances, but it still suffers from some limitations.

It's a great strategy as long as you repeatedly interact with the other player over an indeterminate, long-term period. If you won't have to suffer the consequences of defection, either because 1) there are very few interactions or 2) you know which one is the last, being selfish pays more.

It also loses its effectiveness in contexts where it's hard to tell whether the other player is cooperating or defecting, due to delayed effects or poor visibility.

If you'd like to learn more on this topic, as well as how Tit-for-tat can help explain how "mutual cooperation can emerge in a world of egoists without central control", I recommend reading Axelrod's aforementioned book. Learning more about the theory and mechanics that explain how seeds of virtue can stubbornly sprout within a seemingly hopeless dog eat dog reality, with concrete case studies, can help counteract some of the pessimism induced by the ramifications of the Prisoner's Dilemma touched upon earlier.

## Conclusion

The purpose of this post was simply to bring people up to speed on these two concepts so I don't have much to add for now. I'll build upon these ideas in further posts.

If there's a main takeaway to this one, it's the importance of a balanced approach in our interactions with others. Both the players who only swear by exploitation and those who never forgive infractions will get trapped in endless conflict and lose out on the compounding benefits of collaboration over time. But on the other hand, you can't afford to be agreeable no matter how you're treated and just hope for the best, or you'll get abused into oblivion.

Reciprocity is key in order to build sustainable long-term cooperation.
