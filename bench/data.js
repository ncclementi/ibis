window.BENCHMARK_DATA = {
  "lastUpdate": 1679576656399,
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
          "id": "fb0626281b03aa0c4239b9b0bd813f2fe0bf1ce2",
          "message": "refactor(duckdb): source loaded and installed extensions from duckdb",
          "timestamp": "2023-03-23T08:57:47-04:00",
          "tree_id": "f2afc9988e8ffad296e711708f94798296f41191",
          "url": "https://github.com/ibis-project/ibis/commit/fb0626281b03aa0c4239b9b0bd813f2fe0bf1ce2"
        },
        "date": 1679576556201,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 104.78155933855504,
            "unit": "iter/sec",
            "range": "stddev: 0.0006989321644387351",
            "extra": "mean: 9.543664040816042 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1509.5064551931791,
            "unit": "iter/sec",
            "range": "stddev: 0.000011863105453805703",
            "extra": "mean: 662.4681839283853 usec\nrounds: 1120"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 81.49519134422455,
            "unit": "iter/sec",
            "range": "stddev: 0.0008494155008692477",
            "extra": "mean: 12.270662642856271 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1697762.367414784,
            "unit": "iter/sec",
            "range": "stddev: 3.008115962714619e-7",
            "extra": "mean: 589.0105819242062 nsec\nrounds: 135136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 82.30589592376623,
            "unit": "iter/sec",
            "range": "stddev: 0.0007444889997379311",
            "extra": "mean: 12.149797882356141 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.796794893705104,
            "unit": "iter/sec",
            "range": "stddev: 0.001607526145002919",
            "extra": "mean: 208.47253680000222 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 171.18560562926473,
            "unit": "iter/sec",
            "range": "stddev: 0.00011526768500077159",
            "extra": "mean: 5.841612653844809 msec\nrounds: 156"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 278.97200892117644,
            "unit": "iter/sec",
            "range": "stddev: 0.00024077822704779073",
            "extra": "mean: 3.5845890197627317 msec\nrounds: 253"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 118.87432305599263,
            "unit": "iter/sec",
            "range": "stddev: 0.0001850841648234188",
            "extra": "mean: 8.412245590908444 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 6840.043864313883,
            "unit": "iter/sec",
            "range": "stddev: 0.000017437219325240586",
            "extra": "mean: 146.19789285522495 usec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 96.50466799003864,
            "unit": "iter/sec",
            "range": "stddev: 0.0019726626305678163",
            "extra": "mean: 10.362193050632758 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.192110667188326,
            "unit": "iter/sec",
            "range": "stddev: 0.007966027707430696",
            "extra": "mean: 456.18134840000266 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 78.26240799998689,
            "unit": "iter/sec",
            "range": "stddev: 0.00043773486645701313",
            "extra": "mean: 12.777526600001465 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 27.290056334454654,
            "unit": "iter/sec",
            "range": "stddev: 0.02719913128457899",
            "extra": "mean: 36.64338349999905 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4763969.669353253,
            "unit": "iter/sec",
            "range": "stddev: 3.100047208779623e-8",
            "extra": "mean: 209.9089770519501 nsec\nrounds: 199961"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 62512.11950413744,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018311870343842672",
            "extra": "mean: 15.996898008454405 usec\nrounds: 11148"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 92.21038585344813,
            "unit": "iter/sec",
            "range": "stddev: 0.0007432939387018539",
            "extra": "mean: 10.844765378048852 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 90.26172743635975,
            "unit": "iter/sec",
            "range": "stddev: 0.0008152808450772547",
            "extra": "mean: 11.078892775512895 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 243.73188339494507,
            "unit": "iter/sec",
            "range": "stddev: 0.00020460759271613937",
            "extra": "mean: 4.102869046392228 msec\nrounds: 194"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5827355.823670084,
            "unit": "iter/sec",
            "range": "stddev: 3.262801854993453e-8",
            "extra": "mean: 171.60441721052516 nsec\nrounds: 199961"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 55.26355102787243,
            "unit": "iter/sec",
            "range": "stddev: 0.0005943520380352116",
            "extra": "mean: 18.095109369567027 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.7536417415188685,
            "unit": "iter/sec",
            "range": "stddev: 0.06903261865834828",
            "extra": "mean: 1.3268904108000015 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 100.1274497275668,
            "unit": "iter/sec",
            "range": "stddev: 0.0008005969521620058",
            "extra": "mean: 9.987271250000518 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 86.08077318721007,
            "unit": "iter/sec",
            "range": "stddev: 0.019614250745714976",
            "extra": "mean: 11.616996025641887 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4484.237072954444,
            "unit": "iter/sec",
            "range": "stddev: 0.000030364143029993613",
            "extra": "mean: 223.00337465011614 usec\nrounds: 2146"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 12423.377414572893,
            "unit": "iter/sec",
            "range": "stddev: 0.000004699567427043139",
            "extra": "mean: 80.49340904889343 usec\nrounds: 6498"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 4687.72823127173,
            "unit": "iter/sec",
            "range": "stddev: 0.000060217524389721814",
            "extra": "mean: 213.322946780281 usec\nrounds: 1879"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 264.68145139605855,
            "unit": "iter/sec",
            "range": "stddev: 0.0002906182079316091",
            "extra": "mean: 3.7781264789259477 msec\nrounds: 261"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 92.07698867251892,
            "unit": "iter/sec",
            "range": "stddev: 0.0005842832704866958",
            "extra": "mean: 10.860476807691883 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 10745.071808684554,
            "unit": "iter/sec",
            "range": "stddev: 0.00002231114571034982",
            "extra": "mean: 93.06592061969879 usec\nrounds: 4132"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 91.5060922027357,
            "unit": "iter/sec",
            "range": "stddev: 0.0006560220058139768",
            "extra": "mean: 10.928234130952251 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 20.65553296456706,
            "unit": "iter/sec",
            "range": "stddev: 0.003728123915048902",
            "extra": "mean: 48.41317828571266 msec\nrounds: 21"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 4853.356580257503,
            "unit": "iter/sec",
            "range": "stddev: 0.00005841108163507852",
            "extra": "mean: 206.04296912116504 usec\nrounds: 1684"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 4645.78739015545,
            "unit": "iter/sec",
            "range": "stddev: 0.000058526895523194386",
            "extra": "mean: 215.2487653909921 usec\nrounds: 3005"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 9.414363663912294,
            "unit": "iter/sec",
            "range": "stddev: 0.0005954976054699634",
            "extra": "mean: 106.22066829999994 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 5208853.420817602,
            "unit": "iter/sec",
            "range": "stddev: 2.918456175835202e-8",
            "extra": "mean: 191.9808294092806 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1719197.8906815236,
            "unit": "iter/sec",
            "range": "stddev: 2.7452458810523476e-7",
            "extra": "mean: 581.6666047697281 nsec\nrounds: 172414"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 83.36773289067129,
            "unit": "iter/sec",
            "range": "stddev: 0.00046377304990019726",
            "extra": "mean: 11.995048507693058 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 659343.6489284665,
            "unit": "iter/sec",
            "range": "stddev: 5.810074130692885e-7",
            "extra": "mean: 1.5166597898154501 usec\nrounds: 20746"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1516684.9956204074,
            "unit": "iter/sec",
            "range": "stddev: 1.844872862515675e-7",
            "extra": "mean: 659.3326912889681 nsec\nrounds: 93450"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 96.59284354283517,
            "unit": "iter/sec",
            "range": "stddev: 0.0007834595218500936",
            "extra": "mean: 10.352733839505811 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 90.26047153435833,
            "unit": "iter/sec",
            "range": "stddev: 0.000818566482617911",
            "extra": "mean: 11.079046929411868 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 65.33651258023411,
            "unit": "iter/sec",
            "range": "stddev: 0.0003633877345492015",
            "extra": "mean: 15.30537765957414 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 630.5960545132558,
            "unit": "iter/sec",
            "range": "stddev: 0.00001364254699258027",
            "extra": "mean: 1.5858012317756722 msec\nrounds: 535"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 249.32974734074088,
            "unit": "iter/sec",
            "range": "stddev: 0.00007121766517997163",
            "extra": "mean: 4.01075287110997 msec\nrounds: 225"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 586.359568998792,
            "unit": "iter/sec",
            "range": "stddev: 0.000054332866086486926",
            "extra": "mean: 1.7054381865166766 msec\nrounds: 445"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 4433.881905165107,
            "unit": "iter/sec",
            "range": "stddev: 0.000060969534924205054",
            "extra": "mean: 225.53600239895485 usec\nrounds: 2084"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 141.31214443351965,
            "unit": "iter/sec",
            "range": "stddev: 0.00015241285350914847",
            "extra": "mean: 7.076532622222363 msec\nrounds: 135"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 181.09686607844196,
            "unit": "iter/sec",
            "range": "stddev: 0.004291131428611798",
            "extra": "mean: 5.521906710229048 msec\nrounds: 176"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 11016.83583949526,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025017629711412715",
            "extra": "mean: 90.77016437106276 usec\nrounds: 4356"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 10040966.74678678,
            "unit": "iter/sec",
            "range": "stddev: 8.003971227584163e-9",
            "extra": "mean: 99.59200395923662 nsec\nrounds: 93450"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 4615.807857991729,
            "unit": "iter/sec",
            "range": "stddev: 0.00008180524765016441",
            "extra": "mean: 216.6467995994715 usec\nrounds: 1996"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7208510875880532,
            "unit": "iter/sec",
            "range": "stddev: 0.020500239751130113",
            "extra": "mean: 1.3872490688000085 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 144077.9996791893,
            "unit": "iter/sec",
            "range": "stddev: 4.748804209335108e-7",
            "extra": "mean: 6.940684922241051 usec\nrounds: 32465"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 237.11853466818368,
            "unit": "iter/sec",
            "range": "stddev: 0.00036927329320772355",
            "extra": "mean: 4.217300015789019 msec\nrounds: 190"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1694491.1116834814,
            "unit": "iter/sec",
            "range": "stddev: 2.900058698790193e-7",
            "extra": "mean: 590.1476809792749 nsec\nrounds: 175439"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 42.109066971396395,
            "unit": "iter/sec",
            "range": "stddev: 0.00046766330510549425",
            "extra": "mean: 23.747854605262905 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 4936.980041910829,
            "unit": "iter/sec",
            "range": "stddev: 0.00005622557295887923",
            "extra": "mean: 202.55297601182036 usec\nrounds: 2001"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 105.9130922651622,
            "unit": "iter/sec",
            "range": "stddev: 0.00016320125385770347",
            "extra": "mean: 9.441703368422264 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1035.7980799445968,
            "unit": "iter/sec",
            "range": "stddev: 0.00003609592608367349",
            "extra": "mean: 965.4391327443745 usec\nrounds: 226"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 266.6243099157757,
            "unit": "iter/sec",
            "range": "stddev: 0.00029091062984117056",
            "extra": "mean: 3.750595736434878 msec\nrounds: 258"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5820143199836898,
            "unit": "iter/sec",
            "range": "stddev: 0.11216416832629873",
            "extra": "mean: 1.7181707832000144 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.14751967132501081,
            "unit": "iter/sec",
            "range": "stddev: 0.03871126136754905",
            "extra": "mean: 6.7787569686000095 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 266.1925552658946,
            "unit": "iter/sec",
            "range": "stddev: 0.00026389959484471906",
            "extra": "mean: 3.7566790664040894 msec\nrounds: 256"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 219.39171129045536,
            "unit": "iter/sec",
            "range": "stddev: 0.010954249803314234",
            "extra": "mean: 4.558057340079214 msec\nrounds: 247"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 30.254695944551514,
            "unit": "iter/sec",
            "range": "stddev: 0.0009332041769762255",
            "extra": "mean: 33.052720206896915 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 270.7062153247952,
            "unit": "iter/sec",
            "range": "stddev: 0.00023702180066722351",
            "extra": "mean: 3.6940415232069683 msec\nrounds: 237"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 103.82018820567062,
            "unit": "iter/sec",
            "range": "stddev: 0.0007849945482256522",
            "extra": "mean: 9.63203801960918 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 143.72161460601677,
            "unit": "iter/sec",
            "range": "stddev: 0.004342412160844889",
            "extra": "mean: 6.957895670329715 msec\nrounds: 182"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 23.971694518146535,
            "unit": "iter/sec",
            "range": "stddev: 0.04774686139637382",
            "extra": "mean: 41.71586615385081 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 4770.691439397353,
            "unit": "iter/sec",
            "range": "stddev: 0.0000625449046080979",
            "extra": "mean: 209.61322120768364 usec\nrounds: 1971"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 103.30946524120746,
            "unit": "iter/sec",
            "range": "stddev: 0.0008281624391831408",
            "extra": "mean: 9.679655176466115 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 135.72338333575425,
            "unit": "iter/sec",
            "range": "stddev: 0.00012566059837326683",
            "extra": "mean: 7.367927142857817 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.645399048101838,
            "unit": "iter/sec",
            "range": "stddev: 0.0009121832060049179",
            "extra": "mean: 73.28477507142647 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 87.5348712151877,
            "unit": "iter/sec",
            "range": "stddev: 0.0009430301436724723",
            "extra": "mean: 11.424018635289832 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 261.44260258626855,
            "unit": "iter/sec",
            "range": "stddev: 0.00026914842708355996",
            "extra": "mean: 3.8249313237693485 msec\nrounds: 244"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 4409.631585929517,
            "unit": "iter/sec",
            "range": "stddev: 0.00006513776147411436",
            "extra": "mean: 226.7763146451627 usec\nrounds: 2943"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 140.33000017503954,
            "unit": "iter/sec",
            "range": "stddev: 0.00016024024243432963",
            "extra": "mean: 7.126059992536576 msec\nrounds: 134"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 96.02989858598369,
            "unit": "iter/sec",
            "range": "stddev: 0.00021167116504059838",
            "extra": "mean: 10.413423472530436 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 454.418511726554,
            "unit": "iter/sec",
            "range": "stddev: 0.000036744854841909715",
            "extra": "mean: 2.200614574878387 msec\nrounds: 414"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.4818972680456985,
            "unit": "iter/sec",
            "range": "stddev: 0.0110174018041147",
            "extra": "mean: 674.810610399993 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 436139.6872022684,
            "unit": "iter/sec",
            "range": "stddev: 5.759558107199162e-7",
            "extra": "mean: 2.292843392479965 usec\nrounds: 1922"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 93.04895269120881,
            "unit": "iter/sec",
            "range": "stddev: 0.0008699445765528483",
            "extra": "mean: 10.74703122472091 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 103.7804964664415,
            "unit": "iter/sec",
            "range": "stddev: 0.0008303166072397408",
            "extra": "mean: 9.635721874999511 msec\nrounds: 104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 42.7037497244433,
            "unit": "iter/sec",
            "range": "stddev: 0.00018469513831559926",
            "extra": "mean: 23.417147357146664 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 55.20690919013803,
            "unit": "iter/sec",
            "range": "stddev: 0.000558000789871226",
            "extra": "mean: 18.113674803925385 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 305.11831587785247,
            "unit": "iter/sec",
            "range": "stddev: 0.0000800429940704143",
            "extra": "mean: 3.2774171459452095 msec\nrounds: 185"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.7352110941504848,
            "unit": "iter/sec",
            "range": "stddev: 0.09076763381702997",
            "extra": "mean: 1.3601535776000104 sec\nrounds: 5"
          }
        ]
      }
    ]
  }
}