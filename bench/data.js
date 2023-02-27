window.BENCHMARK_DATA = {
  "lastUpdate": 1677504404238,
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
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "f067d8111c5f2eb7e0ec049cc1cfce24e30d18d4",
          "message": "fix(polars): back compat for the `reverse`/`descending` argument",
          "timestamp": "2023-02-27T08:20:18-05:00",
          "tree_id": "f2e377a01e063c471e603ffa9aa4af86ea431031",
          "url": "https://github.com/ibis-project/ibis/commit/f067d8111c5f2eb7e0ec049cc1cfce24e30d18d4"
        },
        "date": 1677504319975,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 150.61901503207923,
            "unit": "iter/sec",
            "range": "stddev: 0.004748593862952905",
            "extra": "mean: 6.639267955556723 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 38.05473265739459,
            "unit": "iter/sec",
            "range": "stddev: 0.010844974687830172",
            "extra": "mean: 26.277940486482056 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 308.3831694416222,
            "unit": "iter/sec",
            "range": "stddev: 0.0001959426214398005",
            "extra": "mean: 3.2427191205365142 msec\nrounds: 224"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 64.71830759942985,
            "unit": "iter/sec",
            "range": "stddev: 0.00045939491997787135",
            "extra": "mean: 15.45157834147087 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.7453420074266541,
            "unit": "iter/sec",
            "range": "stddev: 0.029069317394101853",
            "extra": "mean: 572.9536078000024 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 302.06294452875176,
            "unit": "iter/sec",
            "range": "stddev: 0.000196262754618951",
            "extra": "mean: 3.3105682709943105 msec\nrounds: 262"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 105.09229859650861,
            "unit": "iter/sec",
            "range": "stddev: 0.0006580104945416547",
            "extra": "mean: 9.515445121620187 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7369238.976744719,
            "unit": "iter/sec",
            "range": "stddev: 4.8145073932609725e-9",
            "extra": "mean: 135.6992225596382 nsec\nrounds: 68494"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.524314953118694,
            "unit": "iter/sec",
            "range": "stddev: 0.00008099038769086877",
            "extra": "mean: 64.41508066667438 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 101.49657858500056,
            "unit": "iter/sec",
            "range": "stddev: 0.00043343765171191274",
            "extra": "mean: 9.852548863630194 msec\nrounds: 22"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 282.27325666343023,
            "unit": "iter/sec",
            "range": "stddev: 0.0002137650765159916",
            "extra": "mean: 3.542666463767605 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 141.37014670033923,
            "unit": "iter/sec",
            "range": "stddev: 0.0006246486531570517",
            "extra": "mean: 7.073629216214149 msec\nrounds: 111"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 120.1373179351182,
            "unit": "iter/sec",
            "range": "stddev: 0.008307491113073827",
            "extra": "mean: 8.323808265305736 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 134.5164069257527,
            "unit": "iter/sec",
            "range": "stddev: 0.0003827743134646975",
            "extra": "mean: 7.434037400002494 msec\nrounds: 105"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 119.54333755924134,
            "unit": "iter/sec",
            "range": "stddev: 0.00009898848851345101",
            "extra": "mean: 8.365167147056074 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 97.58600024176127,
            "unit": "iter/sec",
            "range": "stddev: 0.0001431085275764932",
            "extra": "mean: 10.247371523810612 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 326.81405577066806,
            "unit": "iter/sec",
            "range": "stddev: 0.000021906252611299893",
            "extra": "mean: 3.0598439153477535 msec\nrounds: 189"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 105.54615843526544,
            "unit": "iter/sec",
            "range": "stddev: 0.0005914787064936482",
            "extra": "mean: 9.474527683670548 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1696094.322142376,
            "unit": "iter/sec",
            "range": "stddev: 1.0324641535229632e-7",
            "extra": "mean: 589.5898517818731 nsec\nrounds: 147059"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.578076102976877,
            "unit": "iter/sec",
            "range": "stddev: 0.00030516272085251374",
            "extra": "mean: 179.27328016667352 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 140.79653286342514,
            "unit": "iter/sec",
            "range": "stddev: 0.0006008930991749137",
            "extra": "mean: 7.102447621846028 msec\nrounds: 119"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13684.54986422322,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015745719986134325",
            "extra": "mean: 73.07511097711676 usec\nrounds: 6632"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 108.13512688726051,
            "unit": "iter/sec",
            "range": "stddev: 0.00012690310367028982",
            "extra": "mean: 9.24768878333661 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 70195.03751775724,
            "unit": "iter/sec",
            "range": "stddev: 6.931889128181083e-7",
            "extra": "mean: 14.246021305238704 usec\nrounds: 12485"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11663.199692830618,
            "unit": "iter/sec",
            "range": "stddev: 0.000011447277254791509",
            "extra": "mean: 85.73976493043338 usec\nrounds: 4186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 76.11284125056525,
            "unit": "iter/sec",
            "range": "stddev: 0.00010696123587686625",
            "extra": "mean: 13.138387472725878 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 48.31077553422865,
            "unit": "iter/sec",
            "range": "stddev: 0.00019211521744969047",
            "extra": "mean: 20.699315813953152 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 356.7756497007985,
            "unit": "iter/sec",
            "range": "stddev: 0.00002759909599759971",
            "extra": "mean: 2.802881869428663 msec\nrounds: 314"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5644.119715923896,
            "unit": "iter/sec",
            "range": "stddev: 0.00004292542253010498",
            "extra": "mean: 177.17554735394344 usec\nrounds: 2249"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.4837800124229896,
            "unit": "iter/sec",
            "range": "stddev: 0.0032649591096964377",
            "extra": "mean: 402.61214559999416 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 142.8949091135463,
            "unit": "iter/sec",
            "range": "stddev: 0.0005717899792035176",
            "extra": "mean: 6.998149942524446 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 546.4765935702312,
            "unit": "iter/sec",
            "range": "stddev: 0.00011058035995418323",
            "extra": "mean: 1.8299045407724008 msec\nrounds: 466"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 751896.4177832338,
            "unit": "iter/sec",
            "range": "stddev: 1.543589004465118e-7",
            "extra": "mean: 1.3299704272408073 usec\nrounds: 23366"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5279.210751622667,
            "unit": "iter/sec",
            "range": "stddev: 0.00004789479024237898",
            "extra": "mean: 189.422254016404 usec\nrounds: 2303"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5341.547411526823,
            "unit": "iter/sec",
            "range": "stddev: 0.000021963361506528254",
            "extra": "mean: 187.21166788523567 usec\nrounds: 1641"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 72.69558137342646,
            "unit": "iter/sec",
            "range": "stddev: 0.00015761982939159868",
            "extra": "mean: 13.755994258621412 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 744.4995684230123,
            "unit": "iter/sec",
            "range": "stddev: 0.000017707751197419947",
            "extra": "mean: 1.343184123152932 msec\nrounds: 609"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 101.40666733259079,
            "unit": "iter/sec",
            "range": "stddev: 0.0005980400357254537",
            "extra": "mean: 9.861284531915713 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8903686848087923,
            "unit": "iter/sec",
            "range": "stddev: 0.0035827899895009394",
            "extra": "mean: 1.1231302460000052 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 37.40108420053037,
            "unit": "iter/sec",
            "range": "stddev: 0.0007352702720294067",
            "extra": "mean: 26.737192821426806 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2548912.9668887695,
            "unit": "iter/sec",
            "range": "stddev: 1.5190681646910648e-8",
            "extra": "mean: 392.3241056051615 nsec\nrounds: 96154"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8048.725271461519,
            "unit": "iter/sec",
            "range": "stddev: 0.00002600320601054643",
            "extra": "mean: 124.24327657768546 usec\nrounds: 3377"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 507821.1822584241,
            "unit": "iter/sec",
            "range": "stddev: 2.7018886349482724e-7",
            "extra": "mean: 1.9691971011384715 usec\nrounds: 2070"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2527662.4612479084,
            "unit": "iter/sec",
            "range": "stddev: 1.7934322517498363e-8",
            "extra": "mean: 395.62244379190713 nsec\nrounds: 116266"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 91.76786545074215,
            "unit": "iter/sec",
            "range": "stddev: 0.0006742604110276736",
            "extra": "mean: 10.897060698625117 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 307.34957745057625,
            "unit": "iter/sec",
            "range": "stddev: 0.00009276329421476986",
            "extra": "mean: 3.253624124994303 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11794958.734979467,
            "unit": "iter/sec",
            "range": "stddev: 3.271484161693063e-9",
            "extra": "mean: 84.78198376682975 nsec\nrounds: 114943"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 101.74235399852599,
            "unit": "iter/sec",
            "range": "stddev: 0.0006384909199264353",
            "extra": "mean: 9.828748409089176 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.17689119233546002,
            "unit": "iter/sec",
            "range": "stddev: 0.07197119031364697",
            "extra": "mean: 5.653192715800003 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5491.963322162536,
            "unit": "iter/sec",
            "range": "stddev: 0.00004536676530214861",
            "extra": "mean: 182.08424589518856 usec\nrounds: 2558"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 11751.70306262778,
            "unit": "iter/sec",
            "range": "stddev: 0.000005477011516932831",
            "extra": "mean: 85.09404931955382 usec\nrounds: 2129"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1191.2729098803036,
            "unit": "iter/sec",
            "range": "stddev: 0.000016187393031537315",
            "extra": "mean: 839.4382107627023 usec\nrounds: 223"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 138168.9585648917,
            "unit": "iter/sec",
            "range": "stddev: 3.3961223799435333e-7",
            "extra": "mean: 7.2375156503068325 usec\nrounds: 45048"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 295.4508379303694,
            "unit": "iter/sec",
            "range": "stddev: 0.00020430434679699123",
            "extra": "mean: 3.3846578571412813 msec\nrounds: 231"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 103.36599554145924,
            "unit": "iter/sec",
            "range": "stddev: 0.0006215506281470073",
            "extra": "mean: 9.674361425744777 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 44.81456711155908,
            "unit": "iter/sec",
            "range": "stddev: 0.0006265978050731063",
            "extra": "mean: 22.314172923073237 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 142.492968375751,
            "unit": "iter/sec",
            "range": "stddev: 0.0006102920580197676",
            "extra": "mean: 7.017890155555051 msec\nrounds: 135"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8925345959953535,
            "unit": "iter/sec",
            "range": "stddev: 0.00286572024515062",
            "extra": "mean: 1.1204047490000106 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.846267935765606,
            "unit": "iter/sec",
            "range": "stddev: 0.003117709899535643",
            "extra": "mean: 1.1816588550000007 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 691.9801614017543,
            "unit": "iter/sec",
            "range": "stddev: 0.000018145725865442747",
            "extra": "mean: 1.4451281348504057 msec\nrounds: 571"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5481.19872949646,
            "unit": "iter/sec",
            "range": "stddev: 0.00004304806167636243",
            "extra": "mean: 182.4418433541939 usec\nrounds: 2528"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 56.510456935916544,
            "unit": "iter/sec",
            "range": "stddev: 0.0003479449252476203",
            "extra": "mean: 17.695839924529555 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 131.82628039078574,
            "unit": "iter/sec",
            "range": "stddev: 0.000605798596248732",
            "extra": "mean: 7.58574084799784 msec\nrounds: 125"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 194.91066210742522,
            "unit": "iter/sec",
            "range": "stddev: 0.00002474276349835049",
            "extra": "mean: 5.1305556565645904 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 196.12197978217472,
            "unit": "iter/sec",
            "range": "stddev: 0.000057865495794877635",
            "extra": "mean: 5.098867557377619 msec\nrounds: 183"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.453249664965268,
            "unit": "iter/sec",
            "range": "stddev: 0.00018935992644607467",
            "extra": "mean: 95.66403100000218 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6738137772384584,
            "unit": "iter/sec",
            "range": "stddev: 0.05107993170198471",
            "extra": "mean: 1.4840895715999978 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5795.432697303564,
            "unit": "iter/sec",
            "range": "stddev: 0.0000456564211261134",
            "extra": "mean: 172.54967009888134 usec\nrounds: 2428"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 134.12238847752047,
            "unit": "iter/sec",
            "range": "stddev: 0.00006426762940999518",
            "extra": "mean: 7.455876765627423 msec\nrounds: 128"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2554270.3668798306,
            "unit": "iter/sec",
            "range": "stddev: 1.5181216278485492e-8",
            "extra": "mean: 391.5012337637377 nsec\nrounds: 117648"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 296.38534014704925,
            "unit": "iter/sec",
            "range": "stddev: 0.00022003247803112428",
            "extra": "mean: 3.373986039605933 msec\nrounds: 202"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6294862.031823298,
            "unit": "iter/sec",
            "range": "stddev: 1.0667016815028215e-8",
            "extra": "mean: 158.85971685249885 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5806.7164548075425,
            "unit": "iter/sec",
            "range": "stddev: 0.00006811783891072065",
            "extra": "mean: 172.2143672388329 usec\nrounds: 2448"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 25.8756775643235,
            "unit": "iter/sec",
            "range": "stddev: 0.00035596662509210155",
            "extra": "mean: 38.64633099999537 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5806.901687787309,
            "unit": "iter/sec",
            "range": "stddev: 0.00004393526427650007",
            "extra": "mean: 172.20887381357494 usec\nrounds: 2528"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 299.05113416954373,
            "unit": "iter/sec",
            "range": "stddev: 0.00004514588620695548",
            "extra": "mean: 3.3439097389714667 msec\nrounds: 272"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 310.6938849608311,
            "unit": "iter/sec",
            "range": "stddev: 0.0002094892753681408",
            "extra": "mean: 3.218602130280321 msec\nrounds: 284"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 96.0597345374609,
            "unit": "iter/sec",
            "range": "stddev: 0.00012290455978016971",
            "extra": "mean: 10.410189085105424 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 153.2759297659555,
            "unit": "iter/sec",
            "range": "stddev: 0.00003471785130148171",
            "extra": "mean: 6.524181595420421 msec\nrounds: 131"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1757.5722038240433,
            "unit": "iter/sec",
            "range": "stddev: 0.000005412617179467215",
            "extra": "mean: 568.9666676704643 usec\nrounds: 1327"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 140.38736894606674,
            "unit": "iter/sec",
            "range": "stddev: 0.0006103566765905077",
            "extra": "mean: 7.1231479548859875 msec\nrounds: 133"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5721399.3587738,
            "unit": "iter/sec",
            "range": "stddev: 9.412065339612706e-9",
            "extra": "mean: 174.7824155060877 nsec\nrounds: 196079"
          }
        ]
      }
    ]
  }
}