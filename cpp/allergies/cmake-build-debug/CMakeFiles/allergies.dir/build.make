# CMAKE generated file: DO NOT EDIT!
# Generated by "Unix Makefiles" Generator, CMake Version 3.12

# Delete rule output on recipe failure.
.DELETE_ON_ERROR:


#=============================================================================
# Special targets provided by cmake.

# Disable implicit rules so canonical targets will work.
.SUFFIXES:


# Remove some rules from gmake that .SUFFIXES does not remove.
SUFFIXES =

.SUFFIXES: .hpux_make_needs_suffix_list


# Suppress display of executed commands.
$(VERBOSE).SILENT:


# A target that is always out of date.
cmake_force:

.PHONY : cmake_force

#=============================================================================
# Set environment variables for the build.

# The shell in which to execute make rules.
SHELL = /bin/sh

# The CMake executable.
CMAKE_COMMAND = /Applications/CLion.app/Contents/bin/cmake/mac/bin/cmake

# The command to remove a file.
RM = /Applications/CLion.app/Contents/bin/cmake/mac/bin/cmake -E remove -f

# Escaping for special characters.
EQUALS = =

# The top-level source directory on which CMake was run.
CMAKE_SOURCE_DIR = /Users/davidp/Exercism/cpp/allergies

# The top-level build directory on which CMake was run.
CMAKE_BINARY_DIR = /Users/davidp/Exercism/cpp/allergies/cmake-build-debug

# Include any dependencies generated for this target.
include CMakeFiles/allergies.dir/depend.make

# Include the progress variables for this target.
include CMakeFiles/allergies.dir/progress.make

# Include the compile flags for this target's objects.
include CMakeFiles/allergies.dir/flags.make

CMakeFiles/allergies.dir/allergies_test.cpp.o: CMakeFiles/allergies.dir/flags.make
CMakeFiles/allergies.dir/allergies_test.cpp.o: ../allergies_test.cpp
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir=/Users/davidp/Exercism/cpp/allergies/cmake-build-debug/CMakeFiles --progress-num=$(CMAKE_PROGRESS_1) "Building CXX object CMakeFiles/allergies.dir/allergies_test.cpp.o"
	/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/c++  $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -o CMakeFiles/allergies.dir/allergies_test.cpp.o -c /Users/davidp/Exercism/cpp/allergies/allergies_test.cpp

CMakeFiles/allergies.dir/allergies_test.cpp.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/allergies.dir/allergies_test.cpp.i"
	/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E /Users/davidp/Exercism/cpp/allergies/allergies_test.cpp > CMakeFiles/allergies.dir/allergies_test.cpp.i

CMakeFiles/allergies.dir/allergies_test.cpp.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/allergies.dir/allergies_test.cpp.s"
	/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S /Users/davidp/Exercism/cpp/allergies/allergies_test.cpp -o CMakeFiles/allergies.dir/allergies_test.cpp.s

# Object files for target allergies
allergies_OBJECTS = \
"CMakeFiles/allergies.dir/allergies_test.cpp.o"

# External object files for target allergies
allergies_EXTERNAL_OBJECTS =

allergies: CMakeFiles/allergies.dir/allergies_test.cpp.o
allergies: CMakeFiles/allergies.dir/build.make
allergies: /usr/local/lib/libboost_unit_test_framework-mt.a
allergies: /usr/local/lib/libboost_date_time-mt.a
allergies: /usr/local/lib/libboost_regex-mt.a
allergies: CMakeFiles/allergies.dir/link.txt
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --bold --progress-dir=/Users/davidp/Exercism/cpp/allergies/cmake-build-debug/CMakeFiles --progress-num=$(CMAKE_PROGRESS_2) "Linking CXX executable allergies"
	$(CMAKE_COMMAND) -E cmake_link_script CMakeFiles/allergies.dir/link.txt --verbose=$(VERBOSE)

# Rule to build all files generated by this target.
CMakeFiles/allergies.dir/build: allergies

.PHONY : CMakeFiles/allergies.dir/build

CMakeFiles/allergies.dir/clean:
	$(CMAKE_COMMAND) -P CMakeFiles/allergies.dir/cmake_clean.cmake
.PHONY : CMakeFiles/allergies.dir/clean

CMakeFiles/allergies.dir/depend:
	cd /Users/davidp/Exercism/cpp/allergies/cmake-build-debug && $(CMAKE_COMMAND) -E cmake_depends "Unix Makefiles" /Users/davidp/Exercism/cpp/allergies /Users/davidp/Exercism/cpp/allergies /Users/davidp/Exercism/cpp/allergies/cmake-build-debug /Users/davidp/Exercism/cpp/allergies/cmake-build-debug /Users/davidp/Exercism/cpp/allergies/cmake-build-debug/CMakeFiles/allergies.dir/DependInfo.cmake --color=$(COLOR)
.PHONY : CMakeFiles/allergies.dir/depend
