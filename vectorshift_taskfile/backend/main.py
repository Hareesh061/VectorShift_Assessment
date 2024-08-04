
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Dict

app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get('/')
def read_root():
    return {'Ping': 'Pong'}

class Pipeline(BaseModel):
    nodes: List[str]
    edges: List[Dict[str, str]]

def is_dag(nodes, edges):
    from collections import defaultdict, deque

    graph = defaultdict(list)
    indegree = {node: 0 for node in nodes}

    for edge in edges:
        graph[edge['from']].append(edge['to'])
        indegree[edge['to']] += 1

    queue = deque([node for node in nodes if indegree[node] == 0])
    visited = 0

    while queue:
        node = queue.popleft()
        visited += 1

        for neighbor in graph[node]:
            indegree[neighbor] -= 1
            if indegree[neighbor] == 0:
                queue.append(neighbor)

    return visited == len(nodes)

@app.post('/pipelines/parse')
def parse_pipeline(pipeline: Pipeline):
    nodes = pipeline.nodes
    edges = pipeline.edges

    num_nodes = len(nodes)
    num_edges = len(edges)
    dag_status = is_dag(nodes, edges)

    return {'num_nodes': num_nodes, 'num_edges': num_edges, 'is_dag': dag_status}
