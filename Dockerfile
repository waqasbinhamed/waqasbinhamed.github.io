FROM ruby:3.2-alpine

# Install dependencies
RUN apk add --no-cache \
    build-base \
    git \
    nodejs \
    npm

# Set the working directory
WORKDIR /app

# Copy Gemfile and Gemfile.lock
COPY Gemfile* ./

# Install gems
RUN bundle install

# Copy the rest of the application
COPY . .

# Expose port 4000
EXPOSE 4000

# Start Jekyll with live reload and host binding for Docker
CMD ["bundle", "exec", "jekyll", "serve", "--host", "0.0.0.0", "--livereload", "--force_polling"]
