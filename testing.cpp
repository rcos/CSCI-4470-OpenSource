#include <stdlib.h>
#include <vector>
#include <string>
#include <random>
#include <iostream>

//Picks a new random hero from the list
void randomize(const std::vector<std::string> &overwatch, int & selected_hero_index)
{
	int prev_hero = selected_hero_index;
	selected_hero_index = rand() % (overwatch.size() + 1);
	while(selected_hero_index != prev_hero)
	{
		selected_hero_index = rand() % (overwatch.size() + 1);
	}
}

//Write tests here

void test()
{

}

//Implement next function

void next()
{

}

//Implement prev function
void prev()
{

}


//Compile using -std=c++11
int main()
{
	srand (time(NULL));
	std::vector<std::string> overwatch {"DVA", "GENJI", "PHARAH", "ROADHOG", "MERCY", "HANZO", "ZARYA", "LUCIO", "ANA", "JUNKRAT", "MEI", "SOMBRA"};
	int selected_hero_index = 0;
	std::cout << "Your starting hero is: " << overwatch[selected_hero_index] << std::endl;
	randomize(overwatch, selected_hero_index);
	std::cout << "Your new random hero is: " << overwatch[selected_hero_index] << std::endl;
	return 0;
}