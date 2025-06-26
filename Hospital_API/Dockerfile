# Stage 1: Build the application
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src

# Copy solution and project files first to leverage Docker layer caching
COPY ["hospital-dotnet.sln", "./"]
COPY ["Hospital_API/Hospital_API.csproj", "Hospital_API/"]

# Restore dependencies for the entire solution
RUN dotnet restore "hospital-dotnet.sln"

# Copy the rest of the application's source code
COPY . .
WORKDIR "/src/Hospital_API"

# Publish the application, creating the deployable files
RUN dotnet publish "Hospital_API.csproj" -c Release -o /app/publish --no-restore

# Stage 2: Create the final, smaller runtime image
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS final
WORKDIR /app
COPY --from=build /app/publish .

# The convention is to use a non-privileged port inside the container
EXPOSE 8080

# The command to run the application
ENTRYPOINT ["dotnet", "Hospital_API.dll"] 