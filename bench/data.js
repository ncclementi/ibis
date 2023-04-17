window.BENCHMARK_DATA = {
  "lastUpdate": 1681737459096,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "committer": {
            "email": "szucs.krisztian@gmail.com",
            "name": "Krisztián Szűcs",
            "username": "kszucs"
          },
          "distinct": true,
          "id": "29815fa500f137429592176ace70f9d0e83e3353",
          "message": "feat(clickhouse): set default engine to native file",
          "timestamp": "2023-04-17T15:10:12+02:00",
          "tree_id": "d8071dbe4c75972d0c8b45d008e320194c2d294d",
          "url": "https://github.com/ibis-project/ibis/commit/29815fa500f137429592176ace70f9d0e83e3353"
        },
        "date": 1681737379347,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13629.395880885131,
            "unit": "iter/sec",
            "range": "stddev: 0.000006411969369087185",
            "extra": "mean: 73.37082353022512 usec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 161.12927200855475,
            "unit": "iter/sec",
            "range": "stddev: 0.003692294533272084",
            "extra": "mean: 6.2061969717514 msec\nrounds: 177"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 100.29366338616552,
            "unit": "iter/sec",
            "range": "stddev: 0.0009210872123340683",
            "extra": "mean: 9.970719647059374 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 98.23206754574022,
            "unit": "iter/sec",
            "range": "stddev: 0.0001930793211161653",
            "extra": "mean: 10.179975083333817 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.7298317114814266,
            "unit": "iter/sec",
            "range": "stddev: 0.0007531908545040654",
            "extra": "mean: 578.0909167999937 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 1987.8660254750619,
            "unit": "iter/sec",
            "range": "stddev: 0.0023833318053004477",
            "extra": "mean: 503.052010137866 usec\nrounds: 1381"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1760.137824502351,
            "unit": "iter/sec",
            "range": "stddev: 0.000008993544733891722",
            "extra": "mean: 568.1373277020128 usec\nrounds: 296"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 291.92061497223375,
            "unit": "iter/sec",
            "range": "stddev: 0.000023934854741282664",
            "extra": "mean: 3.425588837208759 msec\nrounds: 215"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12235.771555094687,
            "unit": "iter/sec",
            "range": "stddev: 0.000011988023410577863",
            "extra": "mean: 81.7275801119075 usec\nrounds: 3751"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 100.01104462877773,
            "unit": "iter/sec",
            "range": "stddev: 0.0006978828130068282",
            "extra": "mean: 9.998895659092582 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 100.97407300612568,
            "unit": "iter/sec",
            "range": "stddev: 0.0007167342810363577",
            "extra": "mean: 9.90353236458367 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 54.13427772583937,
            "unit": "iter/sec",
            "range": "stddev: 0.00043368447314802986",
            "extra": "mean: 18.472584137253207 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 76.31119495924294,
            "unit": "iter/sec",
            "range": "stddev: 0.00010947393470501055",
            "extra": "mean: 13.104237203127145 msec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 272.03336979717574,
            "unit": "iter/sec",
            "range": "stddev: 0.00034054388623997866",
            "extra": "mean: 3.6760196028361736 msec\nrounds: 141"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 55.21765892406401,
            "unit": "iter/sec",
            "range": "stddev: 0.001087397150826181",
            "extra": "mean: 18.110148446807788 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 85.97638706250805,
            "unit": "iter/sec",
            "range": "stddev: 0.01233481979196815",
            "extra": "mean: 11.631100516854268 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 109.90252953012595,
            "unit": "iter/sec",
            "range": "stddev: 0.000029544580636716124",
            "extra": "mean: 9.098971645833545 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2042.6121051990483,
            "unit": "iter/sec",
            "range": "stddev: 0.0001672293125058732",
            "extra": "mean: 489.5692126051275 usec\nrounds: 1317"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 96.23370919686997,
            "unit": "iter/sec",
            "range": "stddev: 0.0006987935224433014",
            "extra": "mean: 10.391369181813946 msec\nrounds: 22"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 299.64397180285846,
            "unit": "iter/sec",
            "range": "stddev: 0.00004026136758356111",
            "extra": "mean: 3.3372939024380552 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 101.63327419495218,
            "unit": "iter/sec",
            "range": "stddev: 0.0008545633218193457",
            "extra": "mean: 9.839297296294987 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7085226.703283655,
            "unit": "iter/sec",
            "range": "stddev: 8.605693885538134e-9",
            "extra": "mean: 141.13874430250237 nsec\nrounds: 70423"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 249.3049919231385,
            "unit": "iter/sec",
            "range": "stddev: 0.0005161001606114596",
            "extra": "mean: 4.0111511297307 msec\nrounds: 185"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 149881.33716868638,
            "unit": "iter/sec",
            "range": "stddev: 3.2937987249101527e-7",
            "extra": "mean: 6.671944745692613 usec\nrounds: 38911"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 43.99128793894767,
            "unit": "iter/sec",
            "range": "stddev: 0.0004911331478506301",
            "extra": "mean: 22.731773649996967 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 42.71911967000771,
            "unit": "iter/sec",
            "range": "stddev: 0.0008273289156424786",
            "extra": "mean: 23.408722083336404 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 11.271066740278386,
            "unit": "iter/sec",
            "range": "stddev: 0.000197881887698943",
            "extra": "mean: 88.72274674999403 msec\nrounds: 12"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 74.38475918654063,
            "unit": "iter/sec",
            "range": "stddev: 0.00009674668256114737",
            "extra": "mean: 13.443614134613515 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 103.12190236416299,
            "unit": "iter/sec",
            "range": "stddev: 0.0000572780166503663",
            "extra": "mean: 9.697260980200078 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9326713679645762,
            "unit": "iter/sec",
            "range": "stddev: 0.004568363780297896",
            "extra": "mean: 1.072189020000002 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 100.66736668111501,
            "unit": "iter/sec",
            "range": "stddev: 0.0009323674874152116",
            "extra": "mean: 9.933705757573946 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 97.30374899609376,
            "unit": "iter/sec",
            "range": "stddev: 0.0008460397334350592",
            "extra": "mean: 10.277096312498143 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 16.00161984397701,
            "unit": "iter/sec",
            "range": "stddev: 0.00007831353456670458",
            "extra": "mean: 62.493673124999205 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 87.40558030576884,
            "unit": "iter/sec",
            "range": "stddev: 0.01620052972490809",
            "extra": "mean: 11.44091711881237 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 157.0652142728526,
            "unit": "iter/sec",
            "range": "stddev: 0.00020382260591907578",
            "extra": "mean: 6.366782133329707 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 24.83683500746998,
            "unit": "iter/sec",
            "range": "stddev: 0.0007335437746400162",
            "extra": "mean: 40.26277904166283 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4589.647986373425,
            "unit": "iter/sec",
            "range": "stddev: 0.00002417210247460337",
            "extra": "mean: 217.88163339955057 usec\nrounds: 2024"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 87.41826501490988,
            "unit": "iter/sec",
            "range": "stddev: 0.0007882725305807725",
            "extra": "mean: 11.439257000003856 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 197.77745799951,
            "unit": "iter/sec",
            "range": "stddev: 0.00017012153666383798",
            "extra": "mean: 5.056187950410797 msec\nrounds: 121"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9327784289182735,
            "unit": "iter/sec",
            "range": "stddev: 0.007062795837030672",
            "extra": "mean: 1.072065957999996 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 165.77736866164182,
            "unit": "iter/sec",
            "range": "stddev: 0.00006153121913038885",
            "extra": "mean: 6.032186468353467 msec\nrounds: 158"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2169.692679153969,
            "unit": "iter/sec",
            "range": "stddev: 0.00008525520678274372",
            "extra": "mean: 460.8947661610451 usec\nrounds: 1253"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2185.1610150897745,
            "unit": "iter/sec",
            "range": "stddev: 0.00008862853113734899",
            "extra": "mean: 457.632180463789 usec\nrounds: 1679"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2716468.4203693774,
            "unit": "iter/sec",
            "range": "stddev: 1.3260958786764793e-8",
            "extra": "mean: 368.1250231003147 nsec\nrounds: 113637"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.7048031747709043,
            "unit": "iter/sec",
            "range": "stddev: 0.07237182720507766",
            "extra": "mean: 1.4188358335999964 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 284.201832743276,
            "unit": "iter/sec",
            "range": "stddev: 0.0002767614013090365",
            "extra": "mean: 3.518626147999953 msec\nrounds: 250"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 120.7125905646515,
            "unit": "iter/sec",
            "range": "stddev: 0.00006758553960024605",
            "extra": "mean: 8.28413999999791 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 133.46874052531078,
            "unit": "iter/sec",
            "range": "stddev: 0.00006383406535395695",
            "extra": "mean: 7.492391072727338 msec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6112820.669251407,
            "unit": "iter/sec",
            "range": "stddev: 6.109538150482768e-8",
            "extra": "mean: 163.59059984036088 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 101.4273830538172,
            "unit": "iter/sec",
            "range": "stddev: 0.0008640024191999598",
            "extra": "mean: 9.859270444445972 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 86.96399481356589,
            "unit": "iter/sec",
            "range": "stddev: 0.015195957231650499",
            "extra": "mean: 11.499011770834677 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1178.4894667761807,
            "unit": "iter/sec",
            "range": "stddev: 0.000014332293161298869",
            "extra": "mean: 848.543859060151 usec\nrounds: 149"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 96.65973265949613,
            "unit": "iter/sec",
            "range": "stddev: 0.0007830592966321996",
            "extra": "mean: 10.345569685390156 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2745021.580369343,
            "unit": "iter/sec",
            "range": "stddev: 1.7263988728776644e-8",
            "extra": "mean: 364.2958609692316 nsec\nrounds: 97088"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 274.60320942278537,
            "unit": "iter/sec",
            "range": "stddev: 0.000339502562326609",
            "extra": "mean: 3.6416180353536114 msec\nrounds: 198"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 270.06910982345585,
            "unit": "iter/sec",
            "range": "stddev: 0.00029755062746574174",
            "extra": "mean: 3.702755937743861 msec\nrounds: 257"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 485228.5104352224,
            "unit": "iter/sec",
            "range": "stddev: 3.5515389356877795e-7",
            "extra": "mean: 2.060884672879293 usec\nrounds: 2003"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 47.273070858523546,
            "unit": "iter/sec",
            "range": "stddev: 0.0002960873959620896",
            "extra": "mean: 21.15369240540242 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 90.0972735213427,
            "unit": "iter/sec",
            "range": "stddev: 0.00022439933157338427",
            "extra": "mean: 11.099115000001802 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 230.93686398484007,
            "unit": "iter/sec",
            "range": "stddev: 0.003964857514880039",
            "extra": "mean: 4.330187838982889 msec\nrounds: 236"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11673488.349667601,
            "unit": "iter/sec",
            "range": "stddev: 3.544306407315637e-9",
            "extra": "mean: 85.66419651485671 nsec\nrounds: 114943"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8348937451511056,
            "unit": "iter/sec",
            "range": "stddev: 0.00522046987468569",
            "extra": "mean: 1.1977572065999993 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2259.3807382056625,
            "unit": "iter/sec",
            "range": "stddev: 0.00008273580936724776",
            "extra": "mean: 442.5991525422015 usec\nrounds: 1298"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 278.44468845820137,
            "unit": "iter/sec",
            "range": "stddev: 0.00032536092067404",
            "extra": "mean: 3.591377539062357 msec\nrounds: 256"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 96.15749973432646,
            "unit": "iter/sec",
            "range": "stddev: 0.0008541203043221658",
            "extra": "mean: 10.399604843750096 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 681.9175075488853,
            "unit": "iter/sec",
            "range": "stddev: 0.00006992652201484729",
            "extra": "mean: 1.4664530371048026 msec\nrounds: 539"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2115.2187153583404,
            "unit": "iter/sec",
            "range": "stddev: 0.0000923249999006443",
            "extra": "mean: 472.76434949214666 usec\nrounds: 1279"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2145.8551025440606,
            "unit": "iter/sec",
            "range": "stddev: 0.00009251361773541494",
            "extra": "mean: 466.0146898149975 usec\nrounds: 864"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 111.59063224541192,
            "unit": "iter/sec",
            "range": "stddev: 0.00011722801779762715",
            "extra": "mean: 8.961325694443453 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 281.2016131755286,
            "unit": "iter/sec",
            "range": "stddev: 0.00028061219342224774",
            "extra": "mean: 3.5561673658528794 msec\nrounds: 246"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 279.90995947318504,
            "unit": "iter/sec",
            "range": "stddev: 0.00028845763238855514",
            "extra": "mean: 3.57257741697397 msec\nrounds: 271"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10180.461121879438,
            "unit": "iter/sec",
            "range": "stddev: 0.000003962923761286489",
            "extra": "mean: 98.22737772170656 usec\nrounds: 4776"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8374.262053467273,
            "unit": "iter/sec",
            "range": "stddev: 0.000019215529937007367",
            "extra": "mean: 119.41350695921447 usec\nrounds: 3736"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1737513.8984493203,
            "unit": "iter/sec",
            "range": "stddev: 1.0635069782862296e-7",
            "extra": "mean: 575.5349645792592 nsec\nrounds: 121952"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 37.46280660881699,
            "unit": "iter/sec",
            "range": "stddev: 0.0010388867035928061",
            "extra": "mean: 26.69314155882402 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 95.1703307464165,
            "unit": "iter/sec",
            "range": "stddev: 0.0008997566443366986",
            "extra": "mean: 10.507476354837125 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.808194646495878,
            "unit": "iter/sec",
            "range": "stddev: 0.0007101494426599045",
            "extra": "mean: 172.17053849999786 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 788559.7304853267,
            "unit": "iter/sec",
            "range": "stddev: 2.8337745344592146e-7",
            "extra": "mean: 1.2681347542113774 usec\nrounds: 27398"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2233.6381961178245,
            "unit": "iter/sec",
            "range": "stddev: 0.00008692301063193292",
            "extra": "mean: 447.70008040606143 usec\nrounds: 1281"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.558458706534294,
            "unit": "iter/sec",
            "range": "stddev: 0.0018425275121184074",
            "extra": "mean: 390.86032440000054 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5570936.065092213,
            "unit": "iter/sec",
            "range": "stddev: 9.962627709895074e-9",
            "extra": "mean: 179.50304730027432 nsec\nrounds: 196040"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 162.97867670256485,
            "unit": "iter/sec",
            "range": "stddev: 0.00025335257402020613",
            "extra": "mean: 6.135771993197578 msec\nrounds: 147"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1686263978983536,
            "unit": "iter/sec",
            "range": "stddev: 0.13212115308568906",
            "extra": "mean: 5.930269592799999 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 537.1001165053303,
            "unit": "iter/sec",
            "range": "stddev: 0.00005416318857274113",
            "extra": "mean: 1.8618502757112616 msec\nrounds: 457"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 761.3655379536006,
            "unit": "iter/sec",
            "range": "stddev: 0.000014210487868905293",
            "extra": "mean: 1.3134295553851854 msec\nrounds: 650"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 95.91590172101048,
            "unit": "iter/sec",
            "range": "stddev: 0.000958639602131671",
            "extra": "mean: 10.425799914895123 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 74613.40014891983,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010187324921079592",
            "extra": "mean: 13.402418305614193 usec\nrounds: 13624"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1936874.1842747622,
            "unit": "iter/sec",
            "range": "stddev: 2.6032773163671687e-7",
            "extra": "mean: 516.2957966598317 nsec\nrounds: 119048"
          }
        ]
      }
    ]
  }
}