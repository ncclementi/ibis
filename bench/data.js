window.BENCHMARK_DATA = {
  "lastUpdate": 1680792929345,
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
            "email": "gforsyth@users.noreply.github.com",
            "name": "Gil Forsyth",
            "username": "gforsyth"
          },
          "distinct": true,
          "id": "fd9cfc8b62f2033e2f92b9d694f41686a97fd59b",
          "message": "chore(deps): support datafusion 21",
          "timestamp": "2023-04-06T14:46:27Z",
          "tree_id": "9d0455e84b132301d67e63f1cc07520f9067103b",
          "url": "https://github.com/ibis-project/ibis/commit/fd9cfc8b62f2033e2f92b9d694f41686a97fd59b"
        },
        "date": 1680792833650,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 73.44437966861005,
            "unit": "iter/sec",
            "range": "stddev: 0.001198298746453592",
            "extra": "mean: 13.615745745448748 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 191.51649332097367,
            "unit": "iter/sec",
            "range": "stddev: 0.0009773459945897588",
            "extra": "mean: 5.2214824042545604 msec\nrounds: 141"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 333.8425266452346,
            "unit": "iter/sec",
            "range": "stddev: 0.0010045907336375633",
            "extra": "mean: 2.995424250016754 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 16.963509594340405,
            "unit": "iter/sec",
            "range": "stddev: 0.005574576497194073",
            "extra": "mean: 58.950065400006224 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 172.64361682971744,
            "unit": "iter/sec",
            "range": "stddev: 0.0008157837848460732",
            "extra": "mean: 5.792279021739471 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 618423.0359478657,
            "unit": "iter/sec",
            "range": "stddev: 8.173970862593816e-7",
            "extra": "mean: 1.6170160907206277 usec\nrounds: 19763"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 233.80971282958177,
            "unit": "iter/sec",
            "range": "stddev: 0.00014904528071121512",
            "extra": "mean: 4.276982285714006 msec\nrounds: 126"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 48.87177936765766,
            "unit": "iter/sec",
            "range": "stddev: 0.0012694903522391262",
            "extra": "mean: 20.461706386360458 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 69.45835633727495,
            "unit": "iter/sec",
            "range": "stddev: 0.0016659292865974294",
            "extra": "mean: 14.397115807696537 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.9885025545878787,
            "unit": "iter/sec",
            "range": "stddev: 0.004417693523238404",
            "extra": "mean: 502.89098079999803 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 83.55762473320276,
            "unit": "iter/sec",
            "range": "stddev: 0.0012810985505488516",
            "extra": "mean: 11.967788734935597 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5049026.578667172,
            "unit": "iter/sec",
            "range": "stddev: 5.916755725133013e-7",
            "extra": "mean: 198.05797898235224 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 126.2444573683783,
            "unit": "iter/sec",
            "range": "stddev: 0.0002549529812575904",
            "extra": "mean: 7.921139833347487 msec\nrounds: 12"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 1554.6995734908487,
            "unit": "iter/sec",
            "range": "stddev: 0.00014839935088774886",
            "extra": "mean: 643.2110853125453 usec\nrounds: 926"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 391609.99720480636,
            "unit": "iter/sec",
            "range": "stddev: 6.053402900945326e-7",
            "extra": "mean: 2.5535609589583954 usec\nrounds: 1460"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 1567.7871437205617,
            "unit": "iter/sec",
            "range": "stddev: 0.0002011820043018469",
            "extra": "mean: 637.8416891637921 usec\nrounds: 1052"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 102.65669400070249,
            "unit": "iter/sec",
            "range": "stddev: 0.0008203002814145376",
            "extra": "mean: 9.741205965518011 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9485.690833196917,
            "unit": "iter/sec",
            "range": "stddev: 0.000025182037270665582",
            "extra": "mean: 105.42194739262598 usec\nrounds: 4315"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 27.91108258835065,
            "unit": "iter/sec",
            "range": "stddev: 0.03420094393751941",
            "extra": "mean: 35.828062090912006 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 11.154678694602524,
            "unit": "iter/sec",
            "range": "stddev: 0.001245759044221658",
            "extra": "mean: 89.64848090908038 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 136.4147150888091,
            "unit": "iter/sec",
            "range": "stddev: 0.0009722918259871457",
            "extra": "mean: 7.3305874615431135 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 158.24313246152275,
            "unit": "iter/sec",
            "range": "stddev: 0.005449989823561775",
            "extra": "mean: 6.3193895649351655 msec\nrounds: 154"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 53.60533485945783,
            "unit": "iter/sec",
            "range": "stddev: 0.00044290872275214947",
            "extra": "mean: 18.654859681817015 msec\nrounds: 22"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 74.80296843302474,
            "unit": "iter/sec",
            "range": "stddev: 0.0014692466777797904",
            "extra": "mean: 13.36845343103403 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 1562.5705385425372,
            "unit": "iter/sec",
            "range": "stddev: 0.0002385310287124788",
            "extra": "mean: 639.9711087172642 usec\nrounds: 1021"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 8229.558445842831,
            "unit": "iter/sec",
            "range": "stddev: 0.00009087929859170001",
            "extra": "mean: 121.51320226726754 usec\nrounds: 3263"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 1530.615095827541,
            "unit": "iter/sec",
            "range": "stddev: 0.00019961133279189025",
            "extra": "mean: 653.3321164321464 usec\nrounds: 919"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4400823.742825068,
            "unit": "iter/sec",
            "range": "stddev: 1.8040693739278389e-7",
            "extra": "mean: 227.23018653736443 nsec\nrounds: 166667"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 147.66905798599174,
            "unit": "iter/sec",
            "range": "stddev: 0.01857252313181578",
            "extra": "mean: 6.771899364962851 msec\nrounds: 137"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1301.2752189065486,
            "unit": "iter/sec",
            "range": "stddev: 0.00009926314779695142",
            "extra": "mean: 768.4769412886324 usec\nrounds: 1056"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 69.94324003210981,
            "unit": "iter/sec",
            "range": "stddev: 0.0012402655404639318",
            "extra": "mean: 14.297307352946705 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 1544.1583770894135,
            "unit": "iter/sec",
            "range": "stddev: 0.00016390167409387405",
            "extra": "mean: 647.6019654699548 usec\nrounds: 1477"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 74.2948224064092,
            "unit": "iter/sec",
            "range": "stddev: 0.0018362527009865078",
            "extra": "mean: 13.459888153844393 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 38.94736333242599,
            "unit": "iter/sec",
            "range": "stddev: 0.0014194908237277304",
            "extra": "mean: 25.67567903030398 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 213.36227805994116,
            "unit": "iter/sec",
            "range": "stddev: 0.0003655400881283597",
            "extra": "mean: 4.686864093750742 msec\nrounds: 192"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 121.35520871537142,
            "unit": "iter/sec",
            "range": "stddev: 0.0002785901507295268",
            "extra": "mean: 8.240272589744517 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 880.2653586301177,
            "unit": "iter/sec",
            "range": "stddev: 0.0000813288573965565",
            "extra": "mean: 1.1360210761402847 msec\nrounds: 197"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 72.12674320993885,
            "unit": "iter/sec",
            "range": "stddev: 0.0015437535290121402",
            "extra": "mean: 13.864482929574491 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 5847.456508442765,
            "unit": "iter/sec",
            "range": "stddev: 0.00007101231272936891",
            "extra": "mean: 171.01452547037582 usec\nrounds: 3612"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.5823536983883736,
            "unit": "iter/sec",
            "range": "stddev: 0.01766387396016594",
            "extra": "mean: 1.7171694844000058 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 1565.9202682342686,
            "unit": "iter/sec",
            "range": "stddev: 0.00028615820806843846",
            "extra": "mean: 638.6021180552186 usec\nrounds: 1008"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 116623.23615306367,
            "unit": "iter/sec",
            "range": "stddev: 0.000005070586003877563",
            "extra": "mean: 8.574620572932286 usec\nrounds: 31848"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 40.326584527067375,
            "unit": "iter/sec",
            "range": "stddev: 0.001023373376673249",
            "extra": "mean: 24.79753769696999 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 53515.808975576016,
            "unit": "iter/sec",
            "range": "stddev: 0.000024391637058239837",
            "extra": "mean: 18.68606714805317 usec\nrounds: 8727"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.10020374331533928,
            "unit": "iter/sec",
            "range": "stddev: 0.11709914256876101",
            "extra": "mean: 9.979667095400009 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.086538831487777,
            "unit": "iter/sec",
            "range": "stddev: 0.004784338221863998",
            "extra": "mean: 244.70586020001974 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 75.7383232096036,
            "unit": "iter/sec",
            "range": "stddev: 0.0005741752088353161",
            "extra": "mean: 13.203355416682902 msec\nrounds: 12"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1211951.642048794,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016904515573886383",
            "extra": "mean: 825.1154297786242 nsec\nrounds: 147059"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 486.33426830490305,
            "unit": "iter/sec",
            "range": "stddev: 0.0004215024336656175",
            "extra": "mean: 2.056198925659622 msec\nrounds: 417"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 68.28310804802366,
            "unit": "iter/sec",
            "range": "stddev: 0.0017804714708327856",
            "extra": "mean: 14.64491041176242 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 31.057739779453723,
            "unit": "iter/sec",
            "range": "stddev: 0.0020575553126525982",
            "extra": "mean: 32.19809319999361 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1536480.233431464,
            "unit": "iter/sec",
            "range": "stddev: 0.00000107875133512487",
            "extra": "mean: 650.8381808249314 nsec\nrounds: 131579"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1537930.3696248757,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013364716798899817",
            "extra": "mean: 650.2244963430398 nsec\nrounds: 133334"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 73.24823026831285,
            "unit": "iter/sec",
            "range": "stddev: 0.0017472324219767554",
            "extra": "mean: 13.65220697260449 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 119.06015940251099,
            "unit": "iter/sec",
            "range": "stddev: 0.0007956924130872796",
            "extra": "mean: 8.399115245757935 msec\nrounds: 118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 67.16749399574338,
            "unit": "iter/sec",
            "range": "stddev: 0.0011587693864938938",
            "extra": "mean: 14.888154083333422 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 71.16477338902574,
            "unit": "iter/sec",
            "range": "stddev: 0.0015874065447920443",
            "extra": "mean: 14.051896076917869 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 69.08112085592818,
            "unit": "iter/sec",
            "range": "stddev: 0.001812707306234825",
            "extra": "mean: 14.475735014281911 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 32.02599026171601,
            "unit": "iter/sec",
            "range": "stddev: 0.0015330782895813084",
            "extra": "mean: 31.22463948274548 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.5781501789750915,
            "unit": "iter/sec",
            "range": "stddev: 0.014900415607232799",
            "extra": "mean: 1.7296543983999755 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 191.22832483214214,
            "unit": "iter/sec",
            "range": "stddev: 0.00045422156924955725",
            "extra": "mean: 5.2293508342856 msec\nrounds: 175"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 9902.437528162522,
            "unit": "iter/sec",
            "range": "stddev: 0.00006603410743344093",
            "extra": "mean: 100.98523693343189 usec\nrounds: 5453"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 68.77910244425804,
            "unit": "iter/sec",
            "range": "stddev: 0.0014011229147065482",
            "extra": "mean: 14.53929993940309 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3720.7331943954086,
            "unit": "iter/sec",
            "range": "stddev: 0.0000567374218186991",
            "extra": "mean: 268.7642321428243 usec\nrounds: 1904"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 127.65877194030162,
            "unit": "iter/sec",
            "range": "stddev: 0.004807190942369715",
            "extra": "mean: 7.833382577639398 msec\nrounds: 161"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 69.75035295546327,
            "unit": "iter/sec",
            "range": "stddev: 0.0018018846797436287",
            "extra": "mean: 14.336845014082096 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.0960851239646816,
            "unit": "iter/sec",
            "range": "stddev: 0.0103176157323833",
            "extra": "mean: 912.3378998000362 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 69.07798982978557,
            "unit": "iter/sec",
            "range": "stddev: 0.0016278178161921151",
            "extra": "mean: 14.476391140855297 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.48141521879895405,
            "unit": "iter/sec",
            "range": "stddev: 0.16622059066763228",
            "extra": "mean: 2.0772089476000017 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 86.76933848937944,
            "unit": "iter/sec",
            "range": "stddev: 0.0006772996236581927",
            "extra": "mean: 11.524808387497387 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 195.21036184743528,
            "unit": "iter/sec",
            "range": "stddev: 0.00044112245994961134",
            "extra": "mean: 5.122678891305678 msec\nrounds: 184"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 562.980871469476,
            "unit": "iter/sec",
            "range": "stddev: 0.00007821364356165903",
            "extra": "mean: 1.7762592846002558 msec\nrounds: 513"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 197.3720212514119,
            "unit": "iter/sec",
            "range": "stddev: 0.0005760504939428924",
            "extra": "mean: 5.066574247249578 msec\nrounds: 182"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 73.58518127930414,
            "unit": "iter/sec",
            "range": "stddev: 0.001462496379398222",
            "extra": "mean: 13.58969268831917 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 28.15323799097627,
            "unit": "iter/sec",
            "range": "stddev: 0.00280616682938602",
            "extra": "mean: 35.519892962952326 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 9093877.760359673,
            "unit": "iter/sec",
            "range": "stddev: 1.4766941951988347e-7",
            "extra": "mean: 109.96409082592369 nsec\nrounds: 97088"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 1520.8618343128649,
            "unit": "iter/sec",
            "range": "stddev: 0.0002486291856682785",
            "extra": "mean: 657.521924371129 usec\nrounds: 952"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 196.23057608684556,
            "unit": "iter/sec",
            "range": "stddev: 0.0005981558523908918",
            "extra": "mean: 5.09604578420761 msec\nrounds: 190"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 3911629.3482021578,
            "unit": "iter/sec",
            "range": "stddev: 8.508767781905165e-7",
            "extra": "mean: 255.6479438576757 nsec\nrounds: 169492"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 74.78519500783317,
            "unit": "iter/sec",
            "range": "stddev: 0.0012954901731241839",
            "extra": "mean: 13.371630573340857 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 1543.3274748932117,
            "unit": "iter/sec",
            "range": "stddev: 0.00014330312455107855",
            "extra": "mean: 647.9506237450958 usec\nrounds: 994"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 62.67276524024572,
            "unit": "iter/sec",
            "range": "stddev: 0.0014706084908889972",
            "extra": "mean: 15.955894018185809 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 81.38619122137754,
            "unit": "iter/sec",
            "range": "stddev: 0.0006505404306054083",
            "extra": "mean: 12.2870966805648 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1493645.3232211394,
            "unit": "iter/sec",
            "range": "stddev: 0.000007682565114614623",
            "extra": "mean: 669.5029833745522 nsec\nrounds: 117648"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 7.362431113332946,
            "unit": "iter/sec",
            "range": "stddev: 0.004669625520631744",
            "extra": "mean: 135.8247003749966 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 89.20950960703861,
            "unit": "iter/sec",
            "range": "stddev: 0.0003277372343917453",
            "extra": "mean: 11.209567280494278 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.5411216227373745,
            "unit": "iter/sec",
            "range": "stddev: 0.016965328215302274",
            "extra": "mean: 1.8480133818000013 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 182.79549386832116,
            "unit": "iter/sec",
            "range": "stddev: 0.0008779537406552389",
            "extra": "mean: 5.47059437209301 msec\nrounds: 172"
          }
        ]
      }
    ]
  }
}