window.BENCHMARK_DATA = {
  "lastUpdate": 1678708416425,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "krzysztofwitt93@wp.pl",
            "name": "Krzysztof",
            "username": "krzysztof-kwitt"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "9421400b1c125e57a8b12f8b3207fa3154e8c75c",
          "message": "fix(datafusion): support sum aggregation on bool column",
          "timestamp": "2023-03-13T07:48:11-04:00",
          "tree_id": "831a369bea3dfd3acd5d6ef99a0add99ee7bef46",
          "url": "https://github.com/ibis-project/ibis/commit/9421400b1c125e57a8b12f8b3207fa3154e8c75c"
        },
        "date": 1678708332127,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 738.9920925580236,
            "unit": "iter/sec",
            "range": "stddev: 0.00003556516587335871",
            "extra": "mean: 1.353194452377016 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 287.88487124657104,
            "unit": "iter/sec",
            "range": "stddev: 0.003465193640962794",
            "extra": "mean: 3.473610807229631 msec\nrounds: 166"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7931.9063863978445,
            "unit": "iter/sec",
            "range": "stddev: 0.000013470336698028993",
            "extra": "mean: 126.07309659060851 usec\nrounds: 176"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6837946509385234,
            "unit": "iter/sec",
            "range": "stddev: 0.0020567277704097884",
            "extra": "mean: 1.462427351000008 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 10308.906977418128,
            "unit": "iter/sec",
            "range": "stddev: 0.000780495765083948",
            "extra": "mean: 97.00349437535137 usec\nrounds: 4978"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 193.84056743642046,
            "unit": "iter/sec",
            "range": "stddev: 0.000044943640334629375",
            "extra": "mean: 5.158878831326158 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 47.91638469300077,
            "unit": "iter/sec",
            "range": "stddev: 0.00031542554590266436",
            "extra": "mean: 20.86968802857265 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 2353573.0883909604,
            "unit": "iter/sec",
            "range": "stddev: 1.687335362590618e-8",
            "extra": "mean: 424.88589155452865 nsec\nrounds: 106383"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 249.5601649057453,
            "unit": "iter/sec",
            "range": "stddev: 0.0041363357552454535",
            "extra": "mean: 4.007049764443309 msec\nrounds: 225"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 48.76792709000403,
            "unit": "iter/sec",
            "range": "stddev: 0.00033290291948225015",
            "extra": "mean: 20.505279999997583 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 122.18013948656913,
            "unit": "iter/sec",
            "range": "stddev: 0.0005146209625724399",
            "extra": "mean: 8.184636260870588 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13333.174927454513,
            "unit": "iter/sec",
            "range": "stddev: 0.000001985038778801704",
            "extra": "mean: 75.00089104365435 usec\nrounds: 6911"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1802440.60892265,
            "unit": "iter/sec",
            "range": "stddev: 9.330738027580358e-8",
            "extra": "mean: 554.8033011737997 nsec\nrounds: 142858"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5554.4050001801925,
            "unit": "iter/sec",
            "range": "stddev: 0.00004076446286988146",
            "extra": "mean: 180.03728571603236 usec\nrounds: 133"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1760.051490898994,
            "unit": "iter/sec",
            "range": "stddev: 0.00001248973809019464",
            "extra": "mean: 568.1651958314146 usec\nrounds: 1343"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.638303432467251,
            "unit": "iter/sec",
            "range": "stddev: 0.0002759615084823433",
            "extra": "mean: 177.3583156666708 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.60855382776234,
            "unit": "iter/sec",
            "range": "stddev: 0.00007101352772676145",
            "extra": "mean: 64.06743450000718 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 139675.22909645463,
            "unit": "iter/sec",
            "range": "stddev: 3.144575321867366e-7",
            "extra": "mean: 7.159465615119459 usec\nrounds: 40323"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 152.6151046485385,
            "unit": "iter/sec",
            "range": "stddev: 0.000059642963463734435",
            "extra": "mean: 6.552431375013157 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12855403.674774453,
            "unit": "iter/sec",
            "range": "stddev: 2.9224748823262072e-9",
            "extra": "mean: 77.78830018087295 nsec\nrounds: 119048"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 313.6135711028594,
            "unit": "iter/sec",
            "range": "stddev: 0.00023036183194982516",
            "extra": "mean: 3.1886375212762035 msec\nrounds: 282"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 122.80754177941928,
            "unit": "iter/sec",
            "range": "stddev: 0.0005102501546163409",
            "extra": "mean: 8.142822382978315 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2502063.7349528912,
            "unit": "iter/sec",
            "range": "stddev: 3.324484464310548e-7",
            "extra": "mean: 399.6700747587945 nsec\nrounds: 112360"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 33.40517757997476,
            "unit": "iter/sec",
            "range": "stddev: 0.018848717851290903",
            "extra": "mean: 29.935479241381582 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 498742.0770814196,
            "unit": "iter/sec",
            "range": "stddev: 3.4572516419698846e-7",
            "extra": "mean: 2.0050443825631943 usec\nrounds: 2163"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 311.88311943948514,
            "unit": "iter/sec",
            "range": "stddev: 0.0001788742000390442",
            "extra": "mean: 3.2063293511915467 msec\nrounds: 168"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 107.24382699700499,
            "unit": "iter/sec",
            "range": "stddev: 0.0005054809275573873",
            "extra": "mean: 9.324546018186455 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9234434784818731,
            "unit": "iter/sec",
            "range": "stddev: 0.0034549191651468683",
            "extra": "mean: 1.0829033105999997 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1192.7743687024708,
            "unit": "iter/sec",
            "range": "stddev: 0.00003354780573064936",
            "extra": "mean: 838.3815298511355 usec\nrounds: 268"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 304.39292740080833,
            "unit": "iter/sec",
            "range": "stddev: 0.00016991508720464208",
            "extra": "mean: 3.2852274477562133 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 103.12242159238967,
            "unit": "iter/sec",
            "range": "stddev: 0.00046757020843460887",
            "extra": "mean: 9.697212153848401 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.58005186121993,
            "unit": "iter/sec",
            "range": "stddev: 0.0012470435325019937",
            "extra": "mean: 387.58910820000665 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 70885.18891031352,
            "unit": "iter/sec",
            "range": "stddev: 4.37676097626783e-7",
            "extra": "mean: 14.107319390306426 usec\nrounds: 13316"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 317.8624425182403,
            "unit": "iter/sec",
            "range": "stddev: 0.00016990722610777694",
            "extra": "mean: 3.1460149619362965 msec\nrounds: 289"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 110.5553644480518,
            "unit": "iter/sec",
            "range": "stddev: 0.00011159913948525459",
            "extra": "mean: 9.045241766353943 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 355.0772138516042,
            "unit": "iter/sec",
            "range": "stddev: 0.000034142279679162777",
            "extra": "mean: 2.816288854902206 msec\nrounds: 255"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.860544234399778,
            "unit": "iter/sec",
            "range": "stddev: 0.0024520813184490163",
            "extra": "mean: 1.1620553134000033 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1819744514784426,
            "unit": "iter/sec",
            "range": "stddev: 0.08342840907271776",
            "extra": "mean: 5.495276902199999 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 104.65979608143734,
            "unit": "iter/sec",
            "range": "stddev: 0.0005533422981942562",
            "extra": "mean: 9.554767326527994 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 183.18799258278855,
            "unit": "iter/sec",
            "range": "stddev: 0.0038804831655546938",
            "extra": "mean: 5.458873072961198 msec\nrounds: 233"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.485451566543139,
            "unit": "iter/sec",
            "range": "stddev: 0.0003383087592393168",
            "extra": "mean: 95.37023690908923 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5556.74837371701,
            "unit": "iter/sec",
            "range": "stddev: 0.00004521225288826288",
            "extra": "mean: 179.96136098764572 usec\nrounds: 2266"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2567517.195117834,
            "unit": "iter/sec",
            "range": "stddev: 1.4595146331577265e-8",
            "extra": "mean: 389.4813253445426 nsec\nrounds: 125001"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 323.0307039010392,
            "unit": "iter/sec",
            "range": "stddev: 0.000026416904081479896",
            "extra": "mean: 3.0956809613563885 msec\nrounds: 207"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9268615646979889,
            "unit": "iter/sec",
            "range": "stddev: 0.004948288511672573",
            "extra": "mean: 1.0789097726000136 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 75.05644407452709,
            "unit": "iter/sec",
            "range": "stddev: 0.00011232032085987542",
            "extra": "mean: 13.323306377358522 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 116.30568448440695,
            "unit": "iter/sec",
            "range": "stddev: 0.0005682295898219402",
            "extra": "mean: 8.598032025976078 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 545.9867759531516,
            "unit": "iter/sec",
            "range": "stddev: 0.00001888163478527976",
            "extra": "mean: 1.8315461913051996 msec\nrounds: 460"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 284.7668352862532,
            "unit": "iter/sec",
            "range": "stddev: 0.00022598850405891816",
            "extra": "mean: 3.511644883066459 msec\nrounds: 248"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 159.70397791178686,
            "unit": "iter/sec",
            "range": "stddev: 0.00004084264720731185",
            "extra": "mean: 6.261584796293264 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 102.27193249665083,
            "unit": "iter/sec",
            "range": "stddev: 0.0005638580694768838",
            "extra": "mean: 9.777853762885997 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 95.7537401018995,
            "unit": "iter/sec",
            "range": "stddev: 0.00015156887275654565",
            "extra": "mean: 10.443456296702532 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5440.433673880028,
            "unit": "iter/sec",
            "range": "stddev: 0.000046241952081432674",
            "extra": "mean: 183.80887626680988 usec\nrounds: 2368"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 27.245924196126087,
            "unit": "iter/sec",
            "range": "stddev: 0.0006134387853346875",
            "extra": "mean: 36.7027373636378 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 99.6742864432808,
            "unit": "iter/sec",
            "range": "stddev: 0.00003901345544134063",
            "extra": "mean: 10.032677791669423 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 292.30377698243996,
            "unit": "iter/sec",
            "range": "stddev: 0.00004824519205929357",
            "extra": "mean: 3.4210984555977006 msec\nrounds: 259"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 35.98115314394488,
            "unit": "iter/sec",
            "range": "stddev: 0.0005489556011593193",
            "extra": "mean: 27.79232772222271 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 111.48770253106831,
            "unit": "iter/sec",
            "range": "stddev: 0.00006717714303758033",
            "extra": "mean: 8.969599133333379 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 301.1627069009527,
            "unit": "iter/sec",
            "range": "stddev: 0.00018046970610276452",
            "extra": "mean: 3.3204642443623773 msec\nrounds: 266"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5768.2830222392695,
            "unit": "iter/sec",
            "range": "stddev: 0.000047804569843100615",
            "extra": "mean: 173.36181254362174 usec\nrounds: 2918"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 106.42890252618795,
            "unit": "iter/sec",
            "range": "stddev: 0.013762536893665573",
            "extra": "mean: 9.39594392372823 msec\nrounds: 118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 119.09982772406558,
            "unit": "iter/sec",
            "range": "stddev: 0.0000621607241380421",
            "extra": "mean: 8.39631777064223 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.8009512576277418,
            "unit": "iter/sec",
            "range": "stddev: 0.0009694926593479154",
            "extra": "mean: 555.2621125999963 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 59.63862284100451,
            "unit": "iter/sec",
            "range": "stddev: 0.00008354490869286965",
            "extra": "mean: 16.767657473680806 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5824889.105499196,
            "unit": "iter/sec",
            "range": "stddev: 9.52953812562231e-9",
            "extra": "mean: 171.67708807603023 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 121.99460493366692,
            "unit": "iter/sec",
            "range": "stddev: 0.0006121824012830183",
            "extra": "mean: 8.197083801728265 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 164.66785056614833,
            "unit": "iter/sec",
            "range": "stddev: 0.00013747743420199695",
            "extra": "mean: 6.072830832259466 msec\nrounds: 155"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5409.002408048514,
            "unit": "iter/sec",
            "range": "stddev: 0.00001932482522430849",
            "extra": "mean: 184.876974451336 usec\nrounds: 2505"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6419593.761298677,
            "unit": "iter/sec",
            "range": "stddev: 8.920157408638332e-9",
            "extra": "mean: 155.77309673839878 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 66.54824276829052,
            "unit": "iter/sec",
            "range": "stddev: 0.0003906523033043115",
            "extra": "mean: 15.026692793103903 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5337.015345145778,
            "unit": "iter/sec",
            "range": "stddev: 0.00004421599546296831",
            "extra": "mean: 187.37064357694578 usec\nrounds: 2382"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 106.4343576842328,
            "unit": "iter/sec",
            "range": "stddev: 0.0006596458129760526",
            "extra": "mean: 9.395462346536434 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 105.51290643092369,
            "unit": "iter/sec",
            "range": "stddev: 0.012860167268134891",
            "extra": "mean: 9.477513546218837 msec\nrounds: 119"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 101.90684033939043,
            "unit": "iter/sec",
            "range": "stddev: 0.0006425636616817254",
            "extra": "mean: 9.812883970002417 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 724253.7146611405,
            "unit": "iter/sec",
            "range": "stddev: 2.336683709275761e-7",
            "extra": "mean: 1.3807316134621057 usec\nrounds: 24692"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 303.029278298892,
            "unit": "iter/sec",
            "range": "stddev: 0.0002542269581428461",
            "extra": "mean: 3.3000111593628025 msec\nrounds: 251"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 682.8930390351503,
            "unit": "iter/sec",
            "range": "stddev: 0.00004708525016923839",
            "extra": "mean: 1.4643581686128848 msec\nrounds: 599"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5789.554988357645,
            "unit": "iter/sec",
            "range": "stddev: 0.00004633665365274215",
            "extra": "mean: 172.7248470756257 usec\nrounds: 2838"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 11960.067393763584,
            "unit": "iter/sec",
            "range": "stddev: 0.0000035275967537618764",
            "extra": "mean: 83.61156898843534 usec\nrounds: 5914"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 135.926560998639,
            "unit": "iter/sec",
            "range": "stddev: 0.000357033485127395",
            "extra": "mean: 7.3569138559314595 msec\nrounds: 118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 71.48992008089145,
            "unit": "iter/sec",
            "range": "stddev: 0.00016203727961643745",
            "extra": "mean: 13.987985982758008 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 107.44716251811316,
            "unit": "iter/sec",
            "range": "stddev: 0.0005547880904221291",
            "extra": "mean: 9.30690002941141 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 6927646.452483453,
            "unit": "iter/sec",
            "range": "stddev: 8.652380196714747e-9",
            "extra": "mean: 144.34916776690994 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 113.87157640552164,
            "unit": "iter/sec",
            "range": "stddev: 0.0007211198959680366",
            "extra": "mean: 8.781822747748576 msec\nrounds: 111"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 93.67161001734092,
            "unit": "iter/sec",
            "range": "stddev: 0.0005677995512232062",
            "extra": "mean: 10.675593168675924 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5842.069636928779,
            "unit": "iter/sec",
            "range": "stddev: 0.000046563535598748906",
            "extra": "mean: 171.17221501072484 usec\nrounds: 2465"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5631.80056270396,
            "unit": "iter/sec",
            "range": "stddev: 0.000045351128766849424",
            "extra": "mean: 177.56310594917028 usec\nrounds: 3530"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 121.99893655928237,
            "unit": "iter/sec",
            "range": "stddev: 0.0005905149774187558",
            "extra": "mean: 8.196792760681767 msec\nrounds: 117"
          }
        ]
      }
    ]
  }
}